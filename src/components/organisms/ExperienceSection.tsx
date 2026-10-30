import { Container } from 'reactstrap';
import type { Portfolio } from '../../data';
import SectionTitle from '../molecules/SectionTitle';
import ExperienceItem from '../molecules/ExperienceItem';

export default function ExperienceSection({ experience }: Pick<Portfolio, 'experience'>) {
  return <section id="experience" className="section experience-section"><Container>
    <SectionTitle eyebrow={experience.eyebrow} title={experience.title} description={experience.description} />
    <div className="timeline">{experience.items.map((job, index) => <ExperienceItem key={job.company} job={job} index={index} />)}</div>
  </Container></section>;
}
