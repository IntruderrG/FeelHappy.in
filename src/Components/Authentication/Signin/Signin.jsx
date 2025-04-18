import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form Validation
  const validateForm = () => {
    let newErrors = {};

    if (!formData.email.trim()) newErrors.email = "Email is required.";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Enter a valid email.";
    if (!formData.password) newErrors.password = "Password is required.";
    if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      // API call or authentication logic here
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="w-full max-w-md bg-gray-100 p-8 rounded-2xl shadow-lg text-center">
        <h2 className="text-3xl font-bold text-black mb-6">Welcome Back</h2>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 mb-2 text-black rounded-lg border border-gray-300 focus:outline-none focus:border-purple-500"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}

          {/* Password Input */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-3 mb-2 text-black rounded-lg border border-gray-300 focus:outline-none focus:border-purple-500"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password}</p>
          )}

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full bg-purple-500 text-white py-3 rounded-lg font-semibold hover:bg-purple-600"
          >
            Sign In
          </button>
        </form>

        {/* OR Divider */}
        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-400" />
          <span className="px-2 text-gray-600">OR</span>
          <hr className="flex-grow border-gray-400" />
        </div>

        {/* Sign In with Google */}
        <button className="w-full flex items-center justify-center bg-white border border-gray-300 text-gray-700 py-3 rounded-lg shadow-sm hover:shadow-md">
          <FcGoogle className="text-2xl mr-2" />
          Sign in with Google
        </button>

        {/* Redirect to Sign Up */}
        <p className="mt-4 text-gray-600">
          Don't have an account?{" "}
          <a
            href="/signup"
            className="text-purple-600 font-bold hover:underline"
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
