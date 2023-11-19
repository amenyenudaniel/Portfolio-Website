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
  setDarkmode: SetDarkmodeFunction;
}
