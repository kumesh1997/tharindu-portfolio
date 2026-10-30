import portfolio from './portfolio.json';
export default portfolio;
export type Portfolio = typeof portfolio;
export type Experience = Portfolio['experience']['items'][number];
export type SkillGroup = Portfolio['skills']['items'][number];
export type Project = Portfolio['projects']['items'][number];
export type SocialLink = Portfolio['profile']['socials'][number];
