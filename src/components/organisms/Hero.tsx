import { Container, Row, Col } from 'reactstrap';
import type { Portfolio } from '../../data';
import ActionLink from '../atoms/ActionLink';
import Icon from '../atoms/Icon';
import RichText from '../atoms/RichText';
import ProfilePortrait from '../molecules/ProfilePortrait';
import SocialLinks from '../molecules/SocialLinks';

export default function Hero({ profile, hero }: Pick<Portfolio, 'profile' | 'hero'>) {
  return <section id="home" className="hero"><Container>
    <Row className="align-items-center gy-5"><Col lg="7">
      <div className="availability"><span className="pulse" />{hero.availability}</div>
      <div className="hero-kicker">{hero.kicker}</div>
      <h1>{profile.firstName}<br /><span>{profile.lastName}<span className="period">.</span></span></h1>
      <div className="role"><span className="role-mark" />{profile.role}</div>
      <p className="hero-copy"><RichText segments={hero.description} /></p>
      <div className="hero-actions">
        <ActionLink href={hero.primaryAction.href}>{hero.primaryAction.label}</ActionLink>
        <ActionLink href={`mailto:${profile.email}`} variant="outline" icon="arrowRight">{hero.secondaryAction.label}</ActionLink>
      </div>
      <div className="social-links"><SocialLinks links={profile.socials} /><span className="social-separator" /><span><Icon name="mapPin" size={14} />{profile.location}</span></div>
    </Col><Col lg="5"><ProfilePortrait profile={profile} tags={hero.portraitTags} /></Col></Row>
    <div className="hero-bottom"><span>{hero.scrollLabel}<span className="down-arrow" aria-hidden="true">↓</span></span><span>{hero.tagline}<span className="tiny-star" aria-hidden="true">✳</span></span></div>
  </Container></section>;
}
