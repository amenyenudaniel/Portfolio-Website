import { darkmodeProps } from "@/types";

const Toggle = ({ darkmode, setDarkmode }: darkmodeProps) => {
  const handleToggle = () => {
    setDarkmode(!darkmode);
  };

  return (
    <section>
      <label className="relative inline-flex items-center me-5 cursor-pointer">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          checked={darkmode}
          onChange={handleToggle}
        />
        <div
          className={`w-11 h-6 rounded-full peer ${
            darkmode ? "bg-gray-700" : "bg-primary"
          } peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600`}
        ></div>
      </label>
    </section>
  );
};

export default Toggle;
