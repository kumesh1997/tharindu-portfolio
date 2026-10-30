import { ArrowUpRight, ArrowRight, Github, Linkedin, Mail, MapPin, Menu, X, Code2, Layers3, Cloud, Database, GraduationCap, BookOpen, Award, ChevronRight, Cpu } from 'lucide-react';
import type { LucideProps } from 'lucide-react';

// JSON stores stable icon names; presentation owns the React components.
const icons = {
  arrowUpRight: ArrowUpRight, arrowRight: ArrowRight, github: Github,
  linkedin: Linkedin, mail: Mail, mapPin: MapPin, menu: Menu, close: X,
  code: Code2, layers: Layers3, cloud: Cloud, database: Database,
  graduation: GraduationCap, book: BookOpen, award: Award,
  chevronRight: ChevronRight, cpu: Cpu,
};

export default function Icon({ name, ...props }: LucideProps & { name: string }) {
  const Component = icons[name as keyof typeof icons] ?? Code2;
  return <Component aria-hidden="true" {...props} />;
}
