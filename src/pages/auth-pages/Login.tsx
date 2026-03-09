import AuthLayout from "../../components/layout/AuthLayout";
import AuthForm from "../../components/AuthForm";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { login } from "../../utils/auth";
import { PriBtn } from "../../components/Buttons";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Validate inputs
    if (!email || !password) {
      alert("Please enter email and password");
    } else {
      // Mock login - replace with real API call
      const mockUser = {
        id: "1",
        email: email,
        password: password,
      };

      const mockToken = "mock-token-" + Date.now();

      // Save to localStorage
      login(mockUser, mockToken);
    }
  };

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
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label className="flex flex-col items-start gap-2 w-full">
          <label>Password</label>
          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              className="pr-10 bg-black/5 border-white/40 border outline-blue-800 px-5 py-2 rounded-md w-full"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
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

        <PriBtn text="Login" clickFn={handleLogin} />
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
