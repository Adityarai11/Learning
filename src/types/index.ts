export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  quote: string;
  image: string;
  rating: number;
  transformation?: string;
}

export interface Transformation {
  id: string;
  clientName: string;
  beforeImage: string;
  afterImage: string;
  duration: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
}