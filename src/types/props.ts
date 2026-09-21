export type CardProps = {
  title: string;
  slug?: string;
  date?: string;
  link?: string;
  isProject?: boolean;
  isLocalProject?: boolean;
  isContact?: boolean;
  isExperience?: boolean;
  projectPath?: string;
  projectLabel?: string;
  externalLabel?: string;
  description?: string;
  impact?: string;
  tech?: string[];
};

export type ProjectCardProps = {
  title?: string;
  children: React.ReactNode;
};

export type HeaderProps = {
  title: string;
  subtitle?: string;
};
