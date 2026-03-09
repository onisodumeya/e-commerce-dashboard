import { PriBtn, TetBtn } from "./Buttons";
import { useEffect } from "react";

interface BtnFn {
  confirm: () => void;
  cancel: () => void;
  priText: string;
  secText: string;
  alertText: string;
  alertOpen: boolean;
}

function Alert({
  confirm,
  cancel,
  priText,
  secText,
  alertText,
  alertOpen,
}: BtnFn) {
  useEffect(() => {
    if (alertOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [alertOpen]);
  return (
    <div
      className={`bg-black/40 w-full h-screen fixed top-0 left-0 py-10 ${alertOpen ? "flex" : "hidden"} items-center justify-center`}
    >
      <div
        className={`bg-blue-700 w-[90%] md:w-fit h-fit p-1 rounded-lg transition-all duration-300 ease-in-out`}
      >
        <div className="bg-gray-800 self-center max-w-96 px-5 py-3 rounded-md flex flex-col gap-5 items-center text-center justify-center text-white">
          <p>{alertText}</p>
          <div className="flex gap-2 items-center">
            <PriBtn clickFn={confirm} text={priText} />
            <TetBtn clickFn={cancel} text={secText} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Alert;
