import type { ReactNode } from 'react';
import Icon from './Icon';

type Props = { href: string; children: ReactNode; variant?: 'primary' | 'outline' | 'text'; icon?: string };

export default function ActionLink({ href, children, variant = 'primary', icon = 'arrowUpRight' }: Props) {
  const className = variant === 'text' ? 'text-link' : `btn-${variant}-custom`;
  return <a className={className} href={href} {...(href.startsWith('https://') ? { target: '_blank', rel: 'noreferrer' } : {})}>
    {children}<Icon name={icon} size={18} />
  </a>;
}
