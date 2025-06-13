import { useState } from "react";
import Width from "./Width";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  // Email format validation
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim());
  const isFormValid = isEmailValid && formData.password.trim() !== "";

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error as user types
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleLogin = () => {
    const newErrors = {};

    if (!isEmailValid) {
      newErrors.email = "Please enter a valid email address";
    }

    if (formData.password.trim() === "") {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      navigate("/account-settings");
    }
  };

  return (
    <Width>
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Sign in to your <br />
          PopX account
        </h1>

        <p className="text-sm font-semibold text-gray-500 mb-6">
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit.
        </p>

        <div className="relative w-full mb-6">
          <label
            htmlFor="email"
            className="absolute -top-2 left-3 bg-gray-50 px-1 text-xs font-medium text-purple-700"
          >
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full border border-gray-300 rounded-md px-3 py-3 text-xs outline-none bg-gray-50 focus:border-purple-500 hover:border-purple-400 transition-colors"
          />
          {errors.email && (
            <p className="text-xs text-red-600 mt-1">{errors.email}</p>
          )}
        </div>

        <div className="relative w-full mb-2">
          <label
            htmlFor="password"
            className="absolute -top-2 left-3 bg-gray-50 px-1 text-xs font-medium text-purple-700"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter password"
            className="w-full border border-gray-300 rounded-md px-3 py-3 text-xs outline-none bg-gray-50 focus:border-purple-500 hover:border-purple-400 transition-colors"
          />
          {errors.password && (
            <p className="text-xs text-red-600 mt-1">{errors.password}</p>
          )}
        </div>

        <button
          className={`w-full py-3 mt-4 rounded-md font-medium transition ${
            isFormValid
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-gray-300 text-white cursor-not-allowed"
          }`}
          disabled={!isFormValid}
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </Width>
  );
};

export default Login;
