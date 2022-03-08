import React from "react";
import "./HomeStyles.css";
import Logo from "../assets/logo.png";
import { FaDatabase, FaAsterisk, FaAccusoft } from "react-icons/fa";
function Home() {
  return (
    <div className="hero">
      <div className="container">
        <div className="content">
          <div className="col-1 ">
            <h1>Enrich your home cooking experience.</h1>
            <h1>
              <span className="primary-color">
                Random recipes from the web!
              </span>
            </h1>
            <div className="used-by">
              <p>USED BY</p>

              <div className="icons ">
                <i>
                  <FaDatabase />
                  Lorem
                </i>
                <i>
                  <FaAsterisk />
                  Ipsum
                </i>
                <i>
                  <FaAccusoft />
                  Dolor
                </i>
              </div>
            </div>
          </div>

          <div className="col-2 rotating">
            {/* <div className="form-layout">
              <div className="form-container">
                <p className="sign-in-text">Sign in with your account</p>
                <div className="social-login">
                  <i>
                    <FaFacebook size={20} />
                  </i>
                  <i>
                    <FaTwitter size={20} />
                  </i>
                  <i>
                    <FaGithub size={20} />
                  </i>
                </div>
                <div className="divider">
                  <p>
                    <span>Or</span>
                  </p>
                </div>
                <form action="">
                  <input type="text" placeholder="Name" />
                  <input type="email" placeholder="Email" />
                  <input type="password" placeholder="Password" />
                  <button>Create your account</button>
                </form>
              </div>

              <div className="form-footer">
                <p>
                  By signing up, you agree to our{" "}
                  <span className="primary-color"> terms and agreement</span>.
                </p>
              </div>
            </div> */}
            <img className="pulse" src={Logo} alt="Logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
