import { useState } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import type { Portfolio } from '../../data';
import ActionLink from '../atoms/ActionLink';
import SectionTitle from '../molecules/SectionTitle';
import ProjectCard from '../molecules/ProjectCard';

export default function ProjectsSection({ projects, githubUrl }: Pick<Portfolio, 'projects'> & { githubUrl: string }) {
  const [active, setActive] = useState('all');
  const visibleProjects = projects.items.filter(project => active === 'all' || project.category === active);
  return <section id="projects" className="section projects-section"><Container>
    <div className="section-top">
      <SectionTitle eyebrow={projects.eyebrow} title={projects.title} description={projects.description} />
      <ActionLink href={githubUrl} variant="text">{projects.linkLabel}</ActionLink>
    </div>
    <div className="project-filters" role="group" aria-label={projects.filterLabel}>
      {projects.filters.map(filter => <Button key={filter.id} type="button" className={active === filter.id ? 'selected' : ''} aria-pressed={active === filter.id} onClick={() => setActive(filter.id)}>{filter.label}</Button>)}
    </div>
    <Row className="g-4" aria-live="polite">{visibleProjects.map(project => <Col lg="4" md="6" key={project.number}><ProjectCard project={project} featuredLabel={projects.featuredLabel} /></Col>)}</Row>
    <p className="project-note">{projects.note}</p>
  </Container></section>;
}
