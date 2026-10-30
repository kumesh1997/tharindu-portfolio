import type { ReactNode } from 'react';

type Props = { header: ReactNode; children: ReactNode; footer: ReactNode };

export default function PortfolioTemplate({ header, children, footer }: Props) {
  return <div className="site-shell">
    <div className="ambient ambient-one" aria-hidden="true" /><div className="ambient ambient-two" aria-hidden="true" />
    {header}<main>{children}</main>{footer}
  </div>;
}
