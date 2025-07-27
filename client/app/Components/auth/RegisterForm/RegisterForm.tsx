"use client";

import React, { useState } from "react";
import { useUserContext } from "@/context/userContext";

function RegisterForm() {
  const { registerUser, userState, handlerUserInput } = useUserContext();
  const { name, email, password } = userState;
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword(!showPassword);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent page reload
    if (name && email && password) {
      registerUser(); // Call context function (update if your function needs event)
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative m-8 px-10 py-14 rounded-lg bg-white w-full max-w-[520px]"
    >
      <div className="relative z-10">
        <h1 className="mb-2 text-center text-xl font-medium">
          Register for an Account
        </h1>
        <p className="mb-8 px-8 text-center text-sm text-gray-500">
          Create an account. Already have an account?{" "}
          <a
            href="/login"
            className="font-bold text-[#2ECC71] hover:text-[#7263F3] transition-all duration-300"
          >
            Login here
          </a>
        </p>

        {/* Name */}
        <div className="flex flex-col mb-4">
          <label htmlFor="name" className="mb-1 text-gray-500">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => handlerUserInput("name")(e)}
            placeholder="John Doe"
            className="px-4 py-3 border-2 rounded-md outline-[#2ECC71] text-gray-800"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col mb-4">
          <label htmlFor="email" className="mb-1 text-gray-500">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => handlerUserInput("email")(e)}
            placeholder="johndoe@gmail.com"
            className="px-4 py-3 border-2 rounded-md outline-[#2ECC71] text-gray-800"
          />
        </div>

        {/* Password */}
        <div className="relative flex flex-col mb-6">
          <label htmlFor="password" className="mb-1 text-gray-500">
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            value={password}
            onChange={(e) => handlerUserInput("password")(e)}
            placeholder="***************"
            className="px-4 py-3 border-2 rounded-md outline-[#2ECC71] text-gray-800"
          />
          <button
            type="button"
            onClick={togglePassword}
            className="absolute p-1 right-4 top-9 text-lg text-gray-500 opacity-50"
          >
            <i className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`} />
          </button>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={!name || !email || !password}
          className="w-full px-4 py-3 font-bold bg-[#2ECC71] text-white rounded-md hover:bg-[#1abc9c] transition-colors"
        >
          Register Now
        </button>
      </div>

      {/* Decorative Image */}
      <img
        src="/flurry.png"
        alt="decor"
        className="absolute bottom-0 right-0 w-24 opacity-20"
      />
    </form>
  );
}

export default RegisterForm;
