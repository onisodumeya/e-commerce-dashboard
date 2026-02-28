export interface User {
  id: string;
  email: string;
  name: string;
  businessName: string;
  role: "owner" | "manager" | "staff";
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
}
