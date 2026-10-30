import Icon from '../atoms/Icon';
import TagList from './TagList';

type Props = { icon: string; className?: string; info: { label: string; title: string; description: string; period?: string; tags?: string[] } };

export default function InfoPanel({ icon, className = '', info }: Props) {
  return <article className={`info-panel ${className}`}>
    <div className="panel-heading"><Icon name={icon} size={21} /><span>{info.label}</span></div>
    <h3>{info.title}</h3><p>{info.description}</p>
    {info.period && <span className="info-year">{info.period}</span>}
    {info.tags && <TagList items={info.tags} />}
  </article>;
}
