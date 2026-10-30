import { Container, Row, Col } from 'reactstrap';
import type { Portfolio } from '../../data';
import RichText from '../atoms/RichText';
import SectionTitle from '../molecules/SectionTitle';

export default function AboutSection({ about }: Pick<Portfolio, 'about'>) {
  return <section id="about" className="section about-section"><Container><Row className="gy-4">
    <Col lg="5"><SectionTitle eyebrow={about.eyebrow} title={about.title} /><div className="about-accent">{about.accent[0]}<br /><span>{about.accent[1]}</span></div></Col>
    <Col lg="7"><div className="about-content">
      {about.paragraphs.map((segments, index) => <p key={index}><RichText segments={segments} /></p>)}
      <div className="about-highlights">{about.highlights.map(item => <div key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>)}</div>
    </div></Col>
  </Row></Container></section>;
}
