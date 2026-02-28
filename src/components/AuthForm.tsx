import type { ReactNode } from "react";

interface AuthFormProps {
  header: string;
  subHeader: string;
  children: ReactNode;
}

const AuthForm: React.FC<AuthFormProps> = ({ header, subHeader, children }) => {
  return (
    <form className="lg:w-1/3 md:w-1/2 w-full bg-gray-950/20 border border-white/60 backdrop-blur-xs text-white p-5 rounded-lg flex flex-col items-center px-10 gap-5">
      <div className="flex flex-col items-start gap-2 text-start w-full">
        <h1 className="text-2xl font-medium">{header}</h1>
        <p className="text-sm text-gray-300">{subHeader}</p>
      </div>
      {children}
    </form>
  );
};

export default AuthForm;
