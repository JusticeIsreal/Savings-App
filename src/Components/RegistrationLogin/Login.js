import { useRef } from "react";
import { Link } from "react-router-dom";
import "./LoginStyle.css";

import { AiFillEye, AiFillEyeInvisible, AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { IoIosArrowBack } from "react-icons/io";

function Login() {
  let flipLogin = useRef();

  // function to flip te login page to registration page
  const flipLoginPage = () => {
    flipLogin.current.style.transform = "rotateY(180deg)";
  };
  const flipRegPage = () => {
    flipLogin.current.style.transform = "rotateY(0deg)";
  };
  return (
    <div className="login-page-con">
      <div className="container">
        <div className="card" ref={flipLogin}>
          <form className="front">
            <button className="go-back">
              <IoIosArrowBack />
            </button>
            <p className="sign-in-header">Sign in to your account</p>
            <div className="input-main-con">
              <label>Enter Email</label>
              <div className="input-con">
                <AiOutlineMail className="input-icon" />
                <input type="email" placeholder="Your Email" />
              </div>
              {/* <p className="validation-text">Validation test</p> */}
            </div>
            <div className="input-main-con">
              <label>Enter Password</label>
              <div className="input-con">
                <RiLockPasswordLine className="input-icon" />
                <input type="password" placeholder="Password" />
                <AiFillEye className="input-icon eye" />
              </div>
              {/* <p className="validation-text">Validation test</p> */}
            </div>
            <div className="checkbox-main-con">
              <div className="checkbox-con">
                <Link to="/ForgetPassword">
                  <span>Forgot Password ?</span>
                </Link>
              </div>
              {/* <p className="validation-text">Validation test</p> */}
            </div>
            <Link to="/HomePage" className="login-btn-link">
              <button className="login-submit-btn">Sign in</button>
            </Link>
            <p className="login-registration-link">
              You dont have an account ?{" "}
              <span onClick={() => flipLoginPage()}>Sign up</span>
            </p>
          </form>
          {/* back card for registration */}
          <form className="back">
            <p className="sign-in-header">Create an account</p>
            <button className="go-back">
              <IoIosArrowBack />
            </button>
            <div className="input-main-con">
              <div className="input-name-con">
                <input type="text" placeholder="First name" />
                <input type="text" placeholder="Last name" />
              </div>
              {/* <p className="validation-text">Validation test</p> */}
            </div>
            <div className="input-cont">
              <input type="email" placeholder="Enter email address" />
              {/* <p className="validation-text">Validation test</p> */}
            </div>
            <div className="input-cont">
              <input type="number" placeholder="Enter phone number" />
              {/* <p className="validation-text">Validation test</p> */}
            </div>
            <div className="input-main-con">
              <div className="input-name-con">
                <input type="password" placeholder="Enter password" />
                <input type="password" placeholder="Confirm password" />
              </div>

              {/* <p className="validation-text">Validation test</p> */}
            </div>

            <div className="policy-checkbox-con">
              <input type="checkbox" />
              <span>
                I agree to all <a href="/">Terms & Conditions</a>
              </span>
            </div>
            <button className="">Create Account</button>
            <p className="login-registration-link">
              Already have an account ?{" "}
              <span onClick={() => flipRegPage()}>Log in</span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
