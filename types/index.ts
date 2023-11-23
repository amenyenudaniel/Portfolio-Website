export interface textVariantsProps {
  delay: number;
  hidden: any;
  show: any;
}

export interface experienceProps {
  experience: any;
}
export interface darkmodeProps {
  darkmode: boolean;
  setDarkmode?: any;
}

export interface projectProps {
  index: number;
  name: string;
  description: string;
  tags: any;
  image: any;
  source_code_link: string;
  live_demo: string;
  darkmode: boolean;
}

export interface testimonialsProps {
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  darkmode: boolean;
}

export interface slideInProps {
  direction: string;
  type: string;
  delay: number;
  duration: number;
}

export interface serviceCardProps {
  index: number;
  title: string;
  icon: any;
  darkmode: boolean;
}
