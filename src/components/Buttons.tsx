interface Props {
  clickFn: () => void;
  text: string;
}

export function PriBtn({ clickFn, text }: Props) {
  return (
    <button
      onClick={clickFn}
      className="text-white px-3 py-2 rounded-md text-sm bg-blue-700 hover:bg-blue-800 transition-colors duration-300 cursor-pointer"
    >
      {text}
    </button>
  );
}

export function SecBtn({ clickFn, text }: Props) {
  return (
    <button
      onClick={clickFn}
      className="text-white px-3 py-2 rounded-md text-sm bg-red-900 hover:bg-red-800 transition-colors duration-300 cursor-pointer"
    >
      {text}
    </button>
  );
}

export function TetBtn({ clickFn, text }: Props) {
  return (
    <button
      onClick={clickFn}
      className=" text-white px-3 py-2 rounded-md text-sm bg-gray-600 hover:bg-gray-700 transition-colors duration-300 cursor-pointer"
    >
      {text}
    </button>
  );
}
