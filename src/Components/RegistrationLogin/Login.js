import React from "react";
import "./LoginStyle.css";

import { AiFillEye, AiFillEyeInvisible, AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";

function Login() {
  return (
    <div className="login-page-con">
      <div className="container">
        <div className="card">
          <form className="front">
            <p className="sign-in-header">Sign in to your account</p>
            <div className="input-main-con">
              <label>Enter Email</label>
              <div className="input-con">
                <AiOutlineMail className="input-icon" />
                <input type="email" placeholder="Your Email" />
              </div>
              <p className="validation-text">Validation test</p>
            </div>
            <div className="input-main-con">
              <label>Enter Password</label>
              <div className="input-con">
                <RiLockPasswordLine className="input-icon" />
                <input type="password" placeholder="Password" />
              </div>
              <p className="validation-text">Validation test</p>
            </div>
            <div className="checkbox-main-con">
              <div className="checkbox-con">
                <input type="checkbox" />
                <span>Forgot Password ?</span>
              </div>
              <p className="validation-text">Validation test</p>
            </div>
            <button className="login-submit-btn">LOGIN</button>
            <p className="login-registration-link">
              Already have an account ? <span>CLICK HERE</span>
            </p>
          </form>
          {/* back card for registration */}
          <form className="back">
            <p>back</p>
            <p>Create an account</p>
            <div className="">
              <div>
                <input type="text" placeholder="First name" />
                <input type="text" placeholder="Last name" />
              </div>
              <p>Validation test</p>
            </div>
            <div className="">
              <input type="email" placeholder="Enter email address" />
              <p>Validation test</p>
            </div>
            <div className="">
              <input type="number" placeholder="Enter phone number" />
              <p>Validation test</p>
            </div>
            <div className="">
              <input type="password" placeholder="Enter password" />
              <input type="password" placeholder="Confirm password" />
              <p>Validation test</p>
            </div>

            <div>
              <input type="checkbox" />
              <span>
                I agree to all <a href="/">Terms & Conditions</a>
              </span>
            </div>
            <button className="">SUBMIT</button>
            <p>
              Already have an account ? <span>LOGIN</span>
            </p>

            <p>or</p>

            <div>
              <span>icon</span> <button>Sign up with Google</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
