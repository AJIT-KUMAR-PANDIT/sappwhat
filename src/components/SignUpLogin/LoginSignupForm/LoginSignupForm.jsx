import React, { useState } from "react";

const LoginSignupForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [useEmail, setUseEmail] = useState(true); // New state to toggle between email and phone
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (useEmail) {
      if (!formData.email) {
        newErrors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Email address is invalid";
      }
    } else {
      if (!formData.phone) {
        newErrors.phone = "Phone number is required";
      } else if (!/^\d{10}$/.test(formData.phone)) {
        newErrors.phone = "Phone number is invalid";
      }
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Handle form submission
      console.log("Form submitted", formData);
    }
  };

  return (
    <div className="w-full max-w-md p-8 space-y-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center text-black">
        {isLogin ? "Login" : "Sign Up"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {useEmail ? (
          <div>
            <label className="block font-medium text-black text-bold">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="text-black text-bold w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-zinc-700"
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>
        ) : (
          <div>
            <label className="block font-medium text-black text-bold">
              Phone
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="text-black text-bold w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-zinc-700"
            />
            {errors.phone && <p className="text-red-500">{errors.phone}</p>}
          </div>
        )}
        <div>
          <label className="block font-medium text-black text-bold">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="text-black text-bold w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-zinc-700"
          />
          {errors.password && <p className="text-red-500">{errors.password}</p>}
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-zinc-700"
        >
          {isLogin ? "Login" : "Sign Up"}
        </button>
      </form>
      <div className="text-center">
        <button
          onClick={() => setIsLogin(!isLogin)}
          className="text-indigo-600 hover:underline"
        >
          {isLogin ? "Create an account" : "Already have an account? Login"}
        </button>
      </div>
      <div className="text-center mt-4">
        <button
          onClick={() => setUseEmail(!useEmail)}
          className="text-indigo-600 hover:underline"
        >
          {useEmail ? "Use phone number" : "Use email"}
        </button>
      </div>
    </div>
  );
};

export default LoginSignupForm;
