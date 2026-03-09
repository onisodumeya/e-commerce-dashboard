export interface User {
  id: string;
  email: string;
  name?: string;
  password?: string;
}

// Check if user is logged in
export const isAuthenticated = (): boolean => {
  const token = localStorage.getItem("authToken");
  return !!token; // Returns true if token exists, false otherwise
};

// Get current user
export const getCurrentUser = (): User | null => {
  const userStr = localStorage.getItem("currentUser");
  if (!userStr) return null;

  try {
    return JSON.parse(userStr);
  } catch (error) {
    console.error("Error parsing user data:", error);
    return null;
  }
};

// Sign up (create user account)
export const signup = (user: User, token: string): void => {
  localStorage.setItem("authToken", token);
  localStorage.setItem("currentUser", JSON.stringify(user));

  window.location.href = "/";
};

// Login (save user and token)
export const login = (user: User, token: string): void => {
  const savedUser = localStorage.getItem("currentUser");

  try {
    if (!savedUser) {
      console.log("User not found");
    } else {
      const parsedUser = JSON.parse(savedUser);

      if (
        parsedUser.email === user.email &&
        parsedUser.password === user.password
      ) {
        localStorage.setItem("authToken", token);
        window.location.href = "/";
      } else {
        alert("Wrong email or password, please try again");
      }
    }
  } catch (error) {
    console.log("Failed to login", error);
  }
};

// Logout (clear user and token)
export const logout = (): void => {
  localStorage.removeItem("authToken");

  window.location.href = "/login";
};
