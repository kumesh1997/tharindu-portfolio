import portfolio from '../data';
import PortfolioTemplate from '../components/templates/PortfolioTemplate';
import Header from '../components/organisms/Header';
import Hero from '../components/organisms/Hero';
import AboutSection from '../components/organisms/AboutSection';
import ExperienceSection from '../components/organisms/ExperienceSection';
import SkillsSection from '../components/organisms/SkillsSection';
import ProjectsSection from '../components/organisms/ProjectsSection';
import EducationSection from '../components/organisms/EducationSection';
import ContactSection from '../components/organisms/ContactSection';
import Footer from '../components/organisms/Footer';

export default function PortfolioPage() {
  const { profile, navigation, hero, about, experience, skills, projects, education, contact, footer } = portfolio;
  const githubUrl = profile.socials.find(link => link.icon === 'github')?.href ?? '#projects';
  return <PortfolioTemplate header={<Header profile={profile} navigation={navigation} />} footer={<Footer profile={profile} footer={footer} />}>
    <Hero profile={profile} hero={hero} />
    <AboutSection about={about} />
    <ExperienceSection experience={experience} />
    <SkillsSection skills={skills} />
    <ProjectsSection projects={projects} githubUrl={githubUrl} />
    <EducationSection education={education} />
    <ContactSection contact={contact} email={profile.email} />
  </PortfolioTemplate>;
}
