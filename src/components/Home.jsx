import { useNavigate } from "react-router-dom";

import Width from "./Width";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Width align="bottom">
      <div className="p-6">
        <div className="text-left mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Welcome to PopX</h1>
        <p className="text-sm text-gray-500 mt-2">
          Lorem ipsum dolor sit amet, <br />
          consectetur adipiscing elit.
        </p>
      </div>

      <div className="w-full max-w-xs space-y-3">
        <button
          onClick={() => navigate("/signup")}
          className="w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition-colors duration-200"
        >
          Create Account
        </button>

        <button
          onClick={() => navigate("/login")}
          className="w-full bg-purple-100 text-black py-3 rounded-md font-medium hover:bg-purple-200 transition-colors duration-200"
        >
          Already Registered? Login
        </button>
      </div>
      </div>
    </Width>
  );
};

export default Home;
