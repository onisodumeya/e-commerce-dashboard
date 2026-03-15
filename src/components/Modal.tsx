import { useTheme } from "../context/ThemeContext";
import { useEffect } from "react";
interface Props {
  openModal: boolean;
  children: React.ReactNode;
}

const Modal: React.FC<Props> = ({ openModal, children }) => {
  const { theme } = useTheme();

  useEffect(() => {
    if (openModal) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [openModal]);
  return (
    <div
      className={`h-screen w-full bg-black/50 absolute top-0 left-0 z-50 items-center justify-center px-5 ${openModal ? "flex" : "hidden"}`}
    >
      <div
        className={` flex flex-col gap-5 w-full h-[70vh] lg:h-[90%] md:w-4/5 lg:w-3/5 p-5 ${theme == "dark" ? "bg-gray-800" : "bg-white"} rounded-lg overflow-hidden overflow-y-auto no-scrollbar transition-colors duration-300`}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
