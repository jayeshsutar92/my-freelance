export interface Project {
  id: string;
  number: string;
  title: string;
  tagline: string;
  category: string;
  description: string;
  techStack: string[];
  liveUrl: string;
  previewType: 'omkar' | 'flowtime' | 'aerovolt';
  accentColor: string;
}

export interface ServiceItem {
  id: string;
  iconName: 'web' | 'uiux' | 'brand' | 'system';
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  iconName: 'search' | 'plan' | 'code' | 'launch';
}
