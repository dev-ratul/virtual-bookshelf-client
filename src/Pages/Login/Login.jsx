import React, { use } from "react";
import Lottie from "lottie-react";
import loginLotte from "../../assets/login.json";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import SocialLogin from "../Shared/SocialLogin";
import { Link, useNavigate } from "react-router";

const Login = () => {
  const { login } = use(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    // login
    login(email, password)
      .then((result) => {
        console.log(result.user);
        form.reset();
        navigate("/");
      })
      .then((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          {
            <Lottie
              className="w-[300px]"
              animationData={loginLotte}
              loop={true}
            />
          }
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-5xl font-bold">SignIn now!</h1>
            <form onSubmit={handleRegister}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Login</button>
                {/* Redirect to Login */}
                <p className="mt-4 text-center text-sm text-gray-500">
                  Already have an account?{" "}
                  <Link
                    to="/register"
                    className="text-indigo-600 font-semibold hover:underline"
                  >
                    Register
                  </Link>
                </p>
              </fieldset>
            </form>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
