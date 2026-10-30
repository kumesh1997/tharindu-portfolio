import { Container, Row, Col } from 'reactstrap';
import type { Portfolio } from '../../data';
import Icon from '../atoms/Icon';
import SectionTitle from '../molecules/SectionTitle';
import InfoPanel from '../molecules/InfoPanel';

export default function EducationSection({ education }: Pick<Portfolio, 'education'>) {
  return <section id="education" className="section education-section"><Container>
    <SectionTitle eyebrow={education.eyebrow} title={education.title} />
    <Row className="g-4"><Col lg="6">
      <InfoPanel icon="graduation" info={education.degree} />
      <InfoPanel icon="book" info={education.research} className="research-panel" />
    </Col><Col lg="6">
      <div className="info-panel cert-panel">
        <div className="panel-heading"><Icon name="award" size={21} /><span>{education.certifications.label}</span></div>
        <div className="cert-list">{education.certifications.items.map((cert, index) => <div className="cert-row" key={cert}><span className="cert-number">{String(index + 1).padStart(2, '0')}</span><span>{cert}</span><Icon name="award" size={16} /></div>)}</div>
      </div>
    </Col></Row>
  </Container></section>;
}
