import { Row, Col } from 'reactstrap';
import type { Experience } from '../../data';
import Icon from '../atoms/Icon';
import TagList from './TagList';

export default function ExperienceItem({ job, index }: { job: Experience; index: number }) {
  return <article className="timeline-item">
    <div className="timeline-marker" aria-hidden="true"><span /></div>
    <Row className="gy-3">
      <Col md="4">
        <div className="job-index">{String(index + 1).padStart(2, '0')} / {job.period}</div>
        <h3 className="job-company">{job.company}</h3>
        <span className="job-location"><Icon name="mapPin" size={13} />{job.location}</span>
      </Col>
      <Col md="8">
        <div className="job-role">{job.role}</div>
        <p className="job-summary">{job.summary}</p>
        <ul className="job-bullets">{job.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul>
        <TagList items={job.tags} />
      </Col>
    </Row>
  </article>;
}
