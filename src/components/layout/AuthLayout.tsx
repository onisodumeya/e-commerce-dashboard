// import bgImg from "../../images/jpgs/AuthBackground.jpg";
import bgImg2 from "../../images/jpgs/AuthTempBg.jpg";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div
      className="w-full h-screen flex md:flex-row justify-between p-5 gap-5 bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: `url(${bgImg2})`,
      }}
    >
      <div className=" lg:w-[70%] md:w-1/2 flex items-center rounded-lg bg-no-repeat bg-cover bg-center p-5">
        <div className="flex flex-col gap-5 items-start">
          <h1 className="text-7xl font-bold text-white">Welcome to Talli</h1>
          <p className="text-white text-lg">
            Your personal business management dashboard, here to help you make
            sense of the numbers.
          </p>
        </div>
      </div>
      {children}
    </div>
  );
};

export default AuthLayout;
