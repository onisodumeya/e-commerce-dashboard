import AuthForm from "../../components/AuthForm";
import AuthLayout from "../../components/layout/AuthLayout";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <AuthLayout>
      <AuthForm
        header="Sign up"
        subHeader="Create your account and start tracking your pennies"
      >
        <label className="flex flex-col items-start gap-2 w-full">
          <label>
            Name{" "}
            <span className="text-sm text-gray-400">
              (Firstname middlename lastname)
            </span>
          </label>
          <input
            type="text"
            className="bg-black/5 border-white/40 border outline-blue-800 px-5 py-2 rounded-md w-full "
            placeholder="Full name"
          />
        </label>

        <label className="flex flex-col items-start gap-2 w-full">
          <label>Email</label>
          <input
            type="email"
            className="bg-black/5 border-white/40 border outline-blue-800 px-5 py-2 rounded-md w-full "
            placeholder="Email"
          />
        </label>

        <div className="flex gap-5 items-center">
          <label className="flex flex-col items-start gap-2 w-full">
            <label>Password</label>
            <div className="relative">
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

          <label className="flex flex-col items-start gap-2 w-full">
            <label>Confirm Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="pr-10 bg-black/5 border-white/40 border outline-blue-800 px-5 py-2 rounded-md w-full"
                placeholder="Confirm password"
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
        </div>

        <button className="w-full bg-blue-400 px-5 py-2 place-items-center place-content-center text-black rounded-md hover:-translate-y-0.5 transition-all cursor-pointer hover:bg-blue-500 duration-500">
          <p>Create account</p>
        </button>
        <p>
          Already have an account?{" "}
          <a
            href="/login"
            className="text-blue-400 font-medium hover:text-blue-500 hover:-translate-y-0.5 duration-500 transition-all"
          >
            Login Here
          </a>
        </p>
      </AuthForm>
    </AuthLayout>
  );
}

export default Signup;
