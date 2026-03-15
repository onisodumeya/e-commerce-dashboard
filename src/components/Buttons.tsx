import { useTheme } from "../context/ThemeContext";
interface Props {
  clickFn: () => void;
  text: string;
}

export function PriBtn({ clickFn, text }: Props) {
  return (
    <button
      onClick={clickFn}
      className="text-white text-nowrap px-3 py-2 w-full rounded-md text-sm bg-blue-700 hover:bg-blue-800 transition-colors duration-300 cursor-pointer"
    >
      {text}
    </button>
  );
}

export function SecBtn({ clickFn, text }: Props) {
  return (
    <button
      onClick={clickFn}
      className="text-white text-nowrap px-3 py-2 w-full rounded-md text-sm bg-red-900 hover:bg-red-800 transition-colors duration-300 cursor-pointer"
    >
      {text}
    </button>
  );
}

export function TetBtn({ clickFn, text }: Props) {
  const { theme } = useTheme();
  return (
    <button
      onClick={clickFn}
      className={`${theme == "dark" ? "text-white hover:bg-gray-900" : "text-black hover:bg-gray-200"} bg-transparent text-nowrap px-3 py-2 w-full rounded-md text-sm transition-colors duration-300 cursor-pointer`}
    >
      {text}
    </button>
  );
}
