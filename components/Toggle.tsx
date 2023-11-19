import { darkmodeProps } from "@/types";
import "./toggle.css";

const Toggle = ({ darkmode, setDarkmode }: darkmodeProps) => {
  const handleClick = () => {
    setDarkmode(false);
  };

  return <section></section>;
};

export default Toggle;
