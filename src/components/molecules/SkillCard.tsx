import { Card, CardBody } from 'reactstrap';
import type { SkillGroup } from '../../data';
import Icon from '../atoms/Icon';

export default function SkillCard({ group }: { group: SkillGroup }) {
  return <Card className="skill-card h-100"><CardBody>
    <div className="skill-icon"><Icon name={group.icon} size={23} /></div>
    <h3>{group.title}</h3>
    <div className="skill-items">{group.items.map(item => <div key={item}><Icon name="chevronRight" size={13} />{item}</div>)}</div>
  </CardBody></Card>;
}
