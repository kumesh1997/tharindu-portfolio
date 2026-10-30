import type { Portfolio } from '../../data';
import Icon from '../atoms/Icon';

type Props = { profile: Portfolio['profile']; tags: Portfolio['hero']['portraitTags'] };

export default function ProfilePortrait({ profile, tags }: Props) {
  return <div className="portrait-area">
    <div className="portrait-glow" aria-hidden="true" />
    <div className="portrait-ring" aria-hidden="true" />
    <div className="portrait-frame">
      <img src={`${import.meta.env.BASE_URL}${profile.image}`} alt={profile.imageAlt} width="360" height="540" />
      <div className="portrait-overlay" aria-hidden="true" />
    </div>
    {tags.map((tag, index) => <div key={tag.title} className={`floating-tag floating-tag-${index === 0 ? 'top' : 'bottom'}`}>
      <span className={`tag-icon${index === 1 ? ' purple' : ''}`}><Icon name={tag.icon} size={17} /></span>
      <span><strong>{tag.title}</strong><small>{tag.subtitle}</small></span>
    </div>)}
    <span className="orbit orbit-one" aria-hidden="true" />
    <span className="orbit orbit-two" aria-hidden="true" />
  </div>;
}
