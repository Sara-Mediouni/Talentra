"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoClose } from "react-icons/io5";
import axios from "axios";

import { setToken, setUser } from "../redux/authSlice";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { MoveLeft } from "lucide-react";

type AuthType = "Login" | "Signup";
type FormData = {
  firstname?: string;
  lastname?: string;
  city?: string;
  address?: string;
  phone?: string;
  country?: string;
  email: string;
  password: string;
  confirmPassword?: string;
  name?: string;
};
interface LoginPopupProps {
  isOpen: boolean;
  onClose: () => void;
  type: AuthType;
  role:string,
  toggleType: (newType: AuthType) => void;
  onPrevious?: () => void;
  onContinue?: () => void; // Optional prop for previous action
}

const LoginPopup: React.FC<LoginPopupProps> = ({
  isOpen,
  onClose,
  type,
  toggleType,
  onPrevious,
  onContinue,
  role,
}) => {
  const [form, setForm] = useState<FormData>({
    firstname: "",
    lastname: "",
    city: "",
    address: "",
    phone: "",
    country: "",
    email: "",
    password: "",
    confirmPassword: "",
    name:"",
  });
  const [error, setError] = useState(""); // Ajout d'un état pour les erreurs
  const url = type === "Login" ? "login" : "register";
  const router = useRouter();
  const dispatch = useAppDispatch();
  const countries = useAppSelector((state) => state.country.countries);
 
  const handleContinue = () => {
    
    onContinue(); // Appelle la fonction du parent
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const LoginUser = () => {
    axios
      .post(`http://localhost:3000/api/users/${url}`, form)
      .then((response) => {
        if (response.data.success) {
          localStorage.setItem("id", response.data.user._id);
          dispatch(setToken(response.data.token));
          dispatch(setUser(jwtDecode(response.data.token).id));
          handleContinue();
          
          
          console.log(response?.data.message);
        } else setError(response?.data.message || "An Error has Occured.");
      })
      .catch((err) => {
        const message = err?.response?.data?.message;

        console.log("Erreur:", message);
        setError(message);
      });
  };
  const LoginCompany = () => {
    axios
      .post(`http://localhost:3000/api/company/${url}`, form)
      .then((response) => {
        if (response.data.success) {
          localStorage.setItem("id", response.data.company._id);
          dispatch(setToken(response.data.token));
          dispatch(setUser(jwtDecode(response.data.token).id));
          if (type === "Signup") {
            handleSignup();
          }
          onClose();
          router.push("/");
          console.log(response?.data.message);
        } else setError(response?.data.message || "An Error has Occured.");
      })
      .catch((err) => {
        const message = err?.response?.data?.message;

        console.log("Erreur:", message);
        setError(message);
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(role);
    if (role === "individual") 
       {LoginUser();
        console.log("LoginUser called");
       } 
    else {LoginCompany()}
    
  };
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError("");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [error]);
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-black/50 backdrop-blur-sm flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          key={`login-popup-${type}`}
        >
          <motion.div
            className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 sm:p-8"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
          >
            {/* Close button */}
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
              onClick={onClose}
            >
              <IoClose size={24} />
            </button>

            {/* Title */}
            <h2 className="text-2xl mb-10 font-bold text-teal-950  text-center">
              {type === "Login" ? (
                <>Welcome back ! </>
              ) : (
                <>Welcome To Talentra ! </>
              )}
            </h2>

            {/* Form */}
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
{type === "Signup" && (
  <>
    {role === "individual" ? (
      <div className="grid grid-cols-2 gap-5">
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-900 mb-1">First Name</label>
          <input
            type="text"
            value={form?.firstname}
            placeholder="First Name"
            onChange={handleChange}
            name="firstname"
            className="login-input"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-900 mb-1">Last Name</label>
          <input
            type="text"
            onChange={handleChange}
            name="lastname"
            value={form?.lastname}
            placeholder="Last Name"
            className="login-input"
          />
        </div>
      </div>
    ) : (
      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-900 mb-1">Company Name</label>
        <input
          type="text"
          onChange={handleChange}
          name="name"
          value={form?.name}
          placeholder="Company Name"
          className="login-input"
        />
      </div>
    )}

  

    <div className="grid grid-cols-2 gap-5">
      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-900 mb-1">City</label>
        <input
          type="text"
          name="city"
          value={form?.city}
          placeholder="City"
          onChange={handleChange}
          className="login-input"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-900 mb-1">Address</label>
        <input
          type="text"
          name="address"
          value={form?.address}
          placeholder="Address"
          onChange={handleChange}
          className="login-input"
        />
      </div>
    </div>

    <div className="grid grid-cols-2 gap-5">
      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-900 mb-1">Phone</label>
        <input
          type="text"
          name="phone"
          value={form?.phone}
          placeholder="Phone"
          onChange={handleChange}
          className="login-input"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-900 mb-1">Country</label>
        <select
          name="country"
          value={form?.country}
          onChange={handleChange}
          className="login-input"
        >
          {countries.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>
    </div>
  </>
)}

{/* Email */}
<div className="flex flex-col">
  <label className="text-sm font-medium text-gray-900 mb-1">Email</label>
  <input
    type="email"
    placeholder="Email"
    name="email"
    onChange={handleChange}
    value={form?.email}
    className="login-input"
  />
</div>

{/* Password */}
<div className="flex flex-col">
  <label className="text-sm font-medium text-gray-900 mb-1">Password</label>
  <input
    type="password"
    name="password"
    placeholder="Password"
    value={form?.password}
    onChange={handleChange}
    className="login-input"
  />
</div>

{/* Confirm password */}
{type === "Signup" && (
  <div className="flex flex-col">
    <label className="text-sm font-medium text-gray-900 mb-1">Confirm Password</label>
    <input
      type="password"
      placeholder="Confirm Password"
      value={form?.confirmPassword}
      name="confirmPassword"
      onChange={handleChange}
      className="login-input"
    />
  </div>
)}
 <button
                type="submit"
                
                className="bg-orange-300 text-white py-3 rounded-lg font-semibold hover:bg-violet/90 transition"
              >
                {type === "Login" ? "Log In" : "Sign Up"}
              </button>
            </form>

            {/* Error messages */}
            {error && (
              <div className="mt-4 p-3 text-red-600 bg-red-100 rounded-lg text-center">
                {error}
              </div>
            )}

            <div className="text-center text-sm text-gray-500 mt-4">
              {type === "Login" ? (
                <>
                  Don’t have an account?{" "}
                  <button
                    onClick={() => toggleType("Signup")}
                    className="text-orange-300 hover:underline font-medium"
                  >
                    Sign up
                  </button>
                </>
              ) : (
                <>
                  Already a member?{" "}
                  <button
                    onClick={() => toggleType("Login")}
                    className="text-orange-300 hover:underline font-medium"
                  >
                    Log In
                  </button>
                </>
              )}
              <button
                className="flex justify-left text-teal-900"
                onClick={onPrevious}
              >
                <MoveLeft />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoginPopup;
