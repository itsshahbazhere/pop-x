import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Width from "./Width";

const SignUP = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.fullName) newErrors.fullName = "Full Name is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (!formData.agency) newErrors.agency = "Please select agency status";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      navigate("/account-settings");
    }
  };

  return (
    <Width>
      <div className="p-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-7">
            Create your <br /> PopX account
          </h1>

          <div className="relative w-full mb-5">
            <label className="absolute -top-2 left-3 bg-gray-50 px-1 text-xs font-semibold text-purple-700">
              Full Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              placeholder="Marry Doe"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-3 text-xs outline-none bg-gray-50 focus:border-purple-500 hover:border-purple-400 transition-colors"
            />
            {errors.fullName && (
              <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>
            )}
          </div>

          <div className="relative w-full mb-5">
            <label className="absolute -top-2 left-3 bg-gray-50 px-1 text-xs font-semibold text-purple-700">
              Phone number<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="phone"
              placeholder="9876543210"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-3 text-xs outline-none bg-gray-50 focus:border-purple-500 hover:border-purple-400 transition-colors"
            />
            {errors.phone && (
              <p className="text-xs text-red-600 mt-1">{errors.phone}</p>
            )}
          </div>

          <div className="relative w-full mb-5">
            <label className="absolute -top-2 left-3 bg-gray-50 px-1 text-xs font-semibold text-purple-700">
              Email address<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="marrydoe@domain.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-3 text-xs outline-none bg-gray-50 focus:border-purple-500 hover:border-purple-400 transition-colors"
            />
            {errors.email && (
              <p className="text-xs text-red-600 mt-1">{errors.email}</p>
            )}
          </div>

          <div className="relative w-full mb-5">
            <label className="absolute -top-2 left-3 bg-gray-50 px-1 text-xs font-semibold text-purple-700">
              Password<span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="**********"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-3 text-xs outline-none bg-gray-50 focus:border-purple-500 hover:border-purple-400 transition-colors"
            />
            {errors.password && (
              <p className="text-xs text-red-600 mt-1">{errors.password}</p>
            )}
          </div>

          <div className="relative w-full mb-6">
            <label className="absolute -top-2 left-3 bg-gray-50 px-1 text-xs font-semibold text-purple-700">
              Company name
            </label>
            <input
              type="text"
              name="company"
              placeholder="American Express"
              value={formData.company}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-3 text-xs outline-none bg-gray-50 focus:border-purple-500 hover:border-purple-400 transition-colors"
            />
            {errors.company && (
              <p className="text-xs text-red-600 mt-1">{errors.company}</p>
            )}
          </div>

          <div className="mb-6">
            <label className="text-sm font-semibold text-gray-900 block mb-2">
              Are you an Agency?<span className="text-red-500">*</span>
            </label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="agency"
                  value="yes"
                  checked={formData.agency === "yes"}
                  onChange={handleChange}
                  className="accent-purple-600"
                />
                <span className="text-sm">Yes</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="agency"
                  value="no"
                  checked={formData.agency === "no"}
                  onChange={handleChange}
                  className="accent-purple-600"
                />
                <span className="text-sm">No</span>
              </label>
            </div>
            {errors.agency && (
              <p className="text-xs text-red-600 mt-1">{errors.agency}</p>
            )}
          </div>
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition-colors duration-200"
        >
          Create Account
        </button>
      </div>
    </Width>
  );
};

export default SignUP;
