export interface textVariantsProps {
  delay: number;
  hidden: any;
  show: any;
}

export interface experienceProps {
  experience: any;
}
type SetDarkmodeFunction = (value: boolean) => void;
export interface darkmodeProps {
  darkmode: boolean;
  setDarkmode?: SetDarkmodeFunction;
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
