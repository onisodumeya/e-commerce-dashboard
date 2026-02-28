import AuthLayout from "../../components/layout/AuthLayout";
import AuthForm from "../../components/AuthForm";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <AuthLayout>
      <AuthForm header="Welcome Back" subHeader="Log into your account">
        <label className="flex flex-col items-start gap-2 w-full">
          <label>Email</label>
          <input
            type="email"
            className="bg-black/5 border border-white/40 text-white outline-blue-800 px-5 py-2 rounded-md w-full"
            autoComplete="off"
            placeholder="Email"
          />
        </label>

        <label className="flex flex-col items-start gap-2 w-full">
          <label>Password</label>
          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              className="pr-10 bg-black/5 border-white/40 border outline-blue-800 px-5 py-2 rounded-md w-full"
              placeholder="Password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2"
            >
              {showPassword ? (
                <EyeOff
                  className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
                  size={20}
                />
              ) : (
                <Eye
                  className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
                  size={20}
                />
              )}
            </button>
          </div>
        </label>

        <button className="w-full bg-blue-400 px-5 py-2 place-items-center place-content-center text-black rounded-md hover:-translate-y-0.5 transition-all cursor-pointer hover:bg-blue-500 duration-500">
          <p>Login</p>
        </button>
        <p>
          Don't have an account?{" "}
          <a
            href="/signup"
            className="text-blue-400 font-medium hover:text-blue-500 hover:-translate-y-0.5 duration-500 transition-all"
          >
            Sign up Here
          </a>
        </p>
      </AuthForm>
    </AuthLayout>
  );
}

export default Login;
