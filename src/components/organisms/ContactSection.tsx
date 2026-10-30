import { Container } from 'reactstrap';
import type { Portfolio } from '../../data';
import ActionLink from '../atoms/ActionLink';

export default function ContactSection({ contact, email }: Pick<Portfolio, 'contact'> & { email: string }) {
  return <section id="contact" className="contact-section"><Container><div className="contact-inner">
    <div className="contact-overline"><span className="pulse" />{contact.overline}</div>
    <h2>{contact.title[0]}<br /><span>{contact.title[1]}</span></h2>
    <p>{contact.description}</p>
    <ActionLink href={`mailto:${email}`}>{contact.actionLabel}</ActionLink>
    <div className="contact-email">{email}</div>
  </div></Container></section>;
}
