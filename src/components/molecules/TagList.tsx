import TechTag from '../atoms/TechTag';

export default function TagList({ items }: { items: string[] }) {
  return <div className="tag-list">{items.map(item => <TechTag key={item}>{item}</TechTag>)}</div>;
}
