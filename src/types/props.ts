export type CardProps = {
  title: string;
  slug?: string;
  date?: string;
  link?: string;
  isProject?: boolean;
  isContact?: boolean;
  isExperience?: boolean;
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
