import { Card, CardBody } from 'reactstrap';
import type { Project } from '../../data';
import Icon from '../atoms/Icon';
import TagList from './TagList';

export default function ProjectCard({ project, featuredLabel }: { project: Project; featuredLabel: string }) {
  return <Card className={`project-card project-card-${project.icon} h-100`}><CardBody>
    <div className="project-top"><span>{project.number} / {featuredLabel}</span><Icon name={project.icon} size={23} /></div>
    <div className="project-art" aria-hidden="true">
      <div className="art-ring art-ring-a" /><div className="art-ring art-ring-b" />
      <Icon name={project.icon} size={56} strokeWidth={1.1} />
    </div>
    <div className="project-label">{project.label}</div>
    <h3>{project.title}</h3><p>{project.desc}</p>
    <TagList items={project.tags} />
  </CardBody></Card>;
}
