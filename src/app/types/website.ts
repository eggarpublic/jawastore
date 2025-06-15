export interface WebsiteVariant {
  name: string;
  price: string;
  discount?: string;
}

export interface WebsiteReference {
  id: number;
  title: string;
  image: string;
  url: string;
  category: string;
}

export interface Website {
  id: string;
  title: string;
  image: string;
  description: string;
  rating: number;
  duration: string;
  revision: string;
  techStack: string[];
  features: string[];
  variants: WebsiteVariant[];
  references: WebsiteReference[];
}

export interface WebsiteDetails {
  [key: string]: Website;
}
