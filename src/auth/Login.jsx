import { useState } from "react";
import { useUserAuth } from "../../context/UserAuthContext";

const Login = () => {
  const { login } = useUserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    try {
      await login(email, password);
      // Handle successful login, e.g., navigate to another page
    } catch (error) {
      console.error("Login failed:", error);
      // Handle login error, e.g., show error message
    }
  };

  return (
    <div className="h-screen w-full bg-gray-100 flex justify-center items-center">
      <div className="bg-white drop-shadow-md p-6 rounded-lg">
        <h1 className="text-xl font-bold text-center">Login</h1>
        <div className="flex flex-col mt-5">
          <label htmlFor="email" className="mx-4">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            className="px-4 py-2 outline-0 border rounded-md mx-4"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col mt-5">
          <label htmlFor="password" className="mx-4">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            className="px-4 py-2 outline-0 border rounded-md mx-4"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="bg-gray-800 text-lg px-4 py-2 rounded-full m-5 text-white"
          onClick={handleSubmit}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
