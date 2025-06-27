import React, { useState, useContext } from "react";
import { useNavigate } from "react-router"; 
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import Lottie from "lottie-react";
import registerAnimation from "../../assets/Animation - 1749014865979 (1).json";
import toast from "react-hot-toast";
import SocialLogin from "../Shared/SocialLogin";
import { Link } from "react-router"; 

const Register = () => {
  const navigate = useNavigate();
  const { signUp, updateUserProfile } = useContext(AuthContext);
  const [errorMsg, setErrorMsg] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;

    // ✅ Password validation
    if (password.length < 6) {
      return toast.error("Password must be at least 6 characters long");
    }
    if (!/[A-Z]/.test(password)) {
      return toast.error("Must include at least one uppercase letter");
    }
    if (!/[a-z]/.test(password)) {
      return toast.error("Must include at least one lowercase letter");
    }

    //  Create user
    signUp(email, password)
      .then((res) => {
        toast.success("Registered Successfully");

        //  Update profile
        updateUserProfile(name, photoURL)
          .then(() => {
            navigate("/");
          })
          .catch((error) => {
            console.error("Profile update error:", error);
            toast.error("Profile update failed");
          });
      })
      .catch((err) => {
        console.error("Signup error:", err);
        toast.error(err.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        {/*  Animation */}
        <div className="text-center lg:text-left">
          <Lottie className="w-[300px]" animationData={registerAnimation} loop />
        </div>

        {/*  Form */}
        <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
          <div className="card-body">
            <h1 className="text-3xl font-bold text-center">Register Now</h1>

            <form onSubmit={handleRegister}>
              {/* Name */}
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input input-bordered"
                required
                placeholder="Enter your name"
              />

              {/* Email */}
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input input-bordered"
                required
                placeholder="Enter your email"
              />

              {/* Photo URL */}
              <label className="label">Photo URL</label>
              <input
                type="text"
                name="photoURL"
                className="input input-bordered"
                placeholder="Enter photo URL"
              />

              {/* Password */}
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input input-bordered"
                required
                placeholder="Enter password"
              />

              {/* Register Button */}
              <button className="btn btn-neutral mt-5 w-full">Register</button>
            </form>

            {/* Redirect to Login */}
            <p className="mt-4 text-center text-sm text-gray-500">
              Already have an account?{" "}
              <Link to="/signIn" className="text-indigo-600 font-semibold hover:underline">
                Login
              </Link>
            </p>

            {/* Google Login */}
            <SocialLogin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
