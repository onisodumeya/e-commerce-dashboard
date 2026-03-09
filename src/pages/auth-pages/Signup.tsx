import AuthForm from "../../components/AuthForm";
import AuthLayout from "../../components/layout/AuthLayout";
import { useState, useEffect, useRef } from "react";
import { Eye, EyeOff } from "lucide-react";
import { signup } from "../../utils/auth";
import { PriBtn } from "../../components/Buttons";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [openAlert, setOpenAlert] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);

  const checkPwdRef = useRef<HTMLInputElement>(null);

  const handleSignup = () => {
    // Validate inputs
    if (!email || !password || !username) {
      setOpenAlert(true);
      setTimeout(() => {
        setOpenAlert(false);
      }, 3000);
      return;
    }

    // Mock login - replace with real API call
    const mockUser = {
      id: "1",
      email: email,
      name: username,
      password: password,
    };

    const mockToken = "mock-token-" + Date.now();

    // Save to localStorage
    signup(mockUser, mockToken);

    // Redirect to dashboard
  };

  useEffect(() => {
    const confirmInput = checkPwdRef.current;
    if (!confirmInput) return;

    const handleConfirmPasswordChange = () => {
      const confirmValue = confirmInput.value;

      // Compare passwords
      if (confirmValue && password) {
        setPasswordMatch(confirmValue === password);
      }
    };

    confirmInput.addEventListener("input", handleConfirmPasswordChange);

    // Cleanup - remove event listener when component unmounts
    return () => {
      confirmInput.removeEventListener("input", handleConfirmPasswordChange);
    };
  }, [confirmPassword]);
  return (
    <AuthLayout>
      <AuthForm
        header="Sign up"
        subHeader="Create your account and start tracking your pennies"
      >
        <span className={`text-red-500 ${openAlert ? "" : "hidden"}`}>
          Please fill in all required information
        </span>
        <label className="flex flex-col items-start gap-2 w-full">
          <label>
            Name <span className="text-sm text-gray-400"></span>
          </label>
          <input
            type="text"
            className="bg-black/5 border-white/40 border outline-blue-800 px-5 py-2 rounded-md w-full "
            placeholder="Full name"
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>

        <label className="flex flex-col items-start gap-2 w-full">
          <label>Email</label>
          <input
            type="email"
            className="bg-black/5 border-white/40 border outline-blue-800 px-5 py-2 rounded-md w-full "
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
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

          <label className="flex flex-col items-start gap-2 w-full">
            <label>Confirm Password</label>
            <div className="relative">
              <input
                ref={checkPwdRef}
                type={showPassword ? "text" : "password"}
                className="pr-10 bg-black/5 border-white/40 border outline-blue-800 px-5 py-2 rounded-md w-full"
                placeholder="Confirm password"
                onChange={(e) => setConfirmPassword(e.target.value)}
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

        {!passwordMatch && (
          <p className="text-red-500 text-sm">Passwords do not match</p>
        )}

        <PriBtn text="Create account" clickFn={handleSignup} />

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
