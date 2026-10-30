import { Container } from 'reactstrap';
import type { Portfolio } from '../../data';
import SocialLinks from '../molecules/SocialLinks';

export default function Footer({ profile, footer }: Pick<Portfolio, 'profile' | 'footer'>) {
  return <footer><Container><div className="footer-content">
    <a href="#home" className="footer-brand">{profile.initials}<span>.</span></a>
    <span>© {new Date().getFullYear()} {profile.firstName} {profile.lastName}. {footer.credit}</span>
    <div><SocialLinks links={profile.socials} /></div>
  </div></Container></footer>;
}
