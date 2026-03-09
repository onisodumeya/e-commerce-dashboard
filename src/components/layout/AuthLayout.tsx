import bgImg2 from "../../images/jpgs/AuthTempBg.jpg";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div
      className="w-full min-h-screen flex flex-col lg:flex-row items-center lg:justify-between p-5 gap-5 bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: `url(${bgImg2})`,
      }}
    >
      <div className=" lg:w-[70%] w-full flex items-center rounded-lg bg-no-repeat bg-cover bg-center p-5">
        <div className="lg:flex flex-col gap-5 items-center text-center lg:text-start lg:items-start w-full">
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold text-white">
            Welcome to Talli
          </h1>
          <p className="text-white text-sm lg:text-lg">
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
