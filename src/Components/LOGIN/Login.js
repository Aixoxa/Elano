import React from "react";
import "./Login.css";
import { Bounce } from "react-reveal";

function Login() {
  return (
    <div className="min-h-screen flex">
      <Bounce right>
        <div className="login_form_container bg-transparent min-h-full w-1/2 flex flex-col items-center flex-wrap pb-6">
          <h1 className="">ELANO</h1>
          <div className="login_content">
            <form className="">
              <h4 className="text-2xl my-10 font-semibold">
                Welcome back, John!
              </h4>
              <div data-type="email_content">
                <label htmlFor="emailadr">Email address</label>
                <input type="email" id="emailadr" />
              </div>

              <div data-type="password_content">
                <label htmlFor="paswd">Password</label>
                <input type="password" id="paswd" />
              </div>

              <div data-type="submit_btn">
                <input type="submit" value="Log In" />
                <p className="text-right">
                  Not yet a member?<span> Sign up</span>
                </p>
              </div>
            </form>

            <p className="text-center">OR</p>
            <button>Continue with</button>
            <button>Continue with</button>
          </div>
        </div>

        <div className="caption_container bg-white min-h-full w-1/2 text-black flex flex-col items-center">
          <div className="caption_content mt-40">
            <h2>Sign up to be a part of the ELANO misfits!</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Officiis, ducimus aliquam sit fuga repellat dolorum?
            </p>
          </div>
        </div>
      </Bounce>
    </div>
  );
}

export default Login;
