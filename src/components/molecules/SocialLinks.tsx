import type { SocialLink } from '../../data';
import Icon from '../atoms/Icon';

export default function SocialLinks({ links }: { links: SocialLink[] }) {
  return <>{links.map(link => <a key={link.label} href={link.href} aria-label={link.label}
    {...(link.href.startsWith('https://') ? { target: '_blank', rel: 'noreferrer' } : {})}>
    <Icon name={link.icon} size={19} />
  </a>)}</>;
}
