export interface Activity {
  id: string;
  icon: string;
  title: string;
  description: string;
  path: string;
}

export interface ActivitySection {
  icon: string;
  title: string;
  link?: string;
  linkText?: string;
  isExternal?: boolean;
  subsections?: ActivitySection[];
}

export interface Poster {
  id: string;
  title: string;
  imagePath: string;
  pdfLink: string;
}

export interface PageContent {
  title: string;
  subtitle?: string;
  description?: string;
  sections: ActivitySection[];
}
