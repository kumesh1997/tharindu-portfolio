import { Container, Row, Col } from 'reactstrap';
import type { Portfolio } from '../../data';
import SectionTitle from '../molecules/SectionTitle';
import SkillCard from '../molecules/SkillCard';

export default function SkillsSection({ skills }: Pick<Portfolio, 'skills'>) {
  return <section id="skills" className="section skills-section"><Container>
    <SectionTitle eyebrow={skills.eyebrow} title={skills.title} description={skills.description} />
    <Row className="g-3">{skills.items.map(group => <Col md="6" lg="3" key={group.title}><SkillCard group={group} /></Col>)}</Row>
  </Container></section>;
}
