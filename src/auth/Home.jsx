import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-gray-100">
      <div className="w-96 h-72 bg-white drop-shadow-xl">
        <h1 className="text-xl font-bold text-center mt-8">
          Authentication System
        </h1>
        <div className="flex flex-col items-center gap-8 mt-12">
          <NavLink to="/login">
            <button className="bg-gray-800 text-white px-5 py-2 rounded-full drop-shadow-md">
              Login
            </button>
          </NavLink>
          <NavLink to="/signup">
            <button className="bg-gray-800 text-white px-5 py-2 rounded-full drop-shadow-md">
              Signup
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;
