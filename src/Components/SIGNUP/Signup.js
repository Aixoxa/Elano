import React, { useState } from "react";
import "./Signup.css";
import {
  Demography,
  DemographyCaption,
} from "../../Assets/DEMOGRAPHY/Demography";
import {
  EmailConfirmation,
  EmailConfirmationCaption,
} from "../../Assets/EMAIL-CONFIRMATION/EmailConfirmation";
import { Badge, BadgeConfirmation } from "../../Assets/BADGE/Badge";
import Stepbar from "../../Assets/STEPBAR/Stepbar";
import FormValidation from "../../EXTRA/FormValidation";
import { Bounce } from "react-reveal";

function Signup() {
  // USER SIGNUP DETAILS
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [profileName, setProfileName] = useState(null);
  const [password, setPassword] = useState(null);

  // PASSWORD VALIDATION STATE

  const [showPassword, setShowPassword] = useState(false);
  const [passwordCharacter, setPasswordCharacter] = useState(false);
  const [passwordNumber, setPasswordNumber] = useState(false);
  const [passwordSymbol, setPasswordSymbol] = useState(false);

  // SIGNUP STATE
  const [signUpStatus, setSignUpStatus] = useState(false);
  const [demoStatus, setDemoStatus] = useState(false);
  const [badgeStatus, setBadgeStatus] = useState(false);
  const [emailStatus, setEmailStatus] = useState(false);

  // SIGNUP EVENT STATE
  const [event, setEvent] = useState(1);

  // PASSWORD HIDE & REVEAL FUNCTION
  const showPasswordHandler = (state) => {
    const password = document.getElementById("paswd");
    return state && password.type === "text"
      ? ((password.type = "password"), setShowPassword(false))
      : !state && password.type === "password"
      ? ((password.type = "text"), setShowPassword(true))
      : "";
  };

  console.log(firstName, lastName, password, email, profileName);

  return (
    <Bounce right>
      <div
        style={{ zIndex: 1 }}
        className="signup_parent_container min-h-screen flex relative"
      >
        <div className="signup_form_container bg-transparent min-h-full w-1/2 flex flex-col items-center flex-wrap pb-6">
          <h1>ELANO</h1>

          <div className="w-full flex flex-col items-center">
            <Stepbar
              signUpStatus={signUpStatus}
              demoStatus={demoStatus}
              badgeStatus={badgeStatus}
              emailStatus={emailStatus}
            />

            {event === 3 && emailStatus && (
              <Demography event={setEvent} status={setDemoStatus} />
            )}

            {event === 2 && signUpStatus && (
              <EmailConfirmation event={setEvent} status={setEmailStatus} />
            )}

            {event === 4 && demoStatus && <Badge status={setBadgeStatus} />}
            {event === 1 && (
              <>
                <h2 className="text-2xl my-10 font-semibold">
                  First Things First!
                </h2>

                <form
                  className="signup_form"
                  onSubmit={() =>
                    passwordCharacter &&
                    passwordNumber &&
                    passwordSymbol &&
                    (setSignUpStatus(true), setEvent(2))
                  }
                >
                  <div className="flex">
                    <div className="" data-type="firstname_content">
                      <label htmlFor="fname">First Name</label>
                      <input
                        type="text"
                        id="fname"
                        required
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </div>
                    <div className="" data-type="lastname_content">
                      <label htmlFor="lname">Last Name</label>
                      <input
                        type="text"
                        id="lname"
                        required
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="" data-type="email_content">
                    <label htmlFor="email">Email address</label>
                    <input
                      type="email"
                      id="email"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="" data-type="password_content">
                    <label htmlFor="paswd">Password</label>
                    <input
                      type="password"
                      id="paswd"
                      required
                      onChange={(e) => (
                        FormValidation(
                          "paswd",
                          "character",
                          "number",
                          "symbol",
                          setPasswordCharacter,
                          setPasswordNumber,
                          setPasswordSymbol
                        ),
                        setPassword(e.target.value)
                      )}
                    />
                    {showPassword ? (
                      <img
                        src="../images/icons/open-eye.png"
                        alt=""
                        onClick={() => showPasswordHandler(showPassword)}
                      />
                    ) : (
                      <img
                        src="../images/icons/close-eye.png"
                        alt=""
                        onClick={() => showPasswordHandler(showPassword)}
                      />
                    )}

                    <ul>
                      <li>
                        <i class="fa-solid fa-check" id="character"></i>At least
                        8 characters
                      </li>
                      <li>
                        <i class="fa-solid fa-check" id="number"></i>Must
                        contain numbers
                      </li>
                      <li>
                        <i class="fa-solid fa-check" id="symbol"></i>
                        Must contain special symbols e.g #,@,% etc.{" "}
                      </li>
                    </ul>
                  </div>
                  <div className="" data-type="username_content">
                    <label htmlFor="uname">What should we call you?</label>
                    <input
                      type="text"
                      id="uname"
                      placeholder="Profile name"
                      required
                      onChange={(e) => setProfileName(e.target.value)}
                    />
                  </div>

                  <div className="" data-type="submit_btn">
                    <input type="submit" value="Create an account" />
                    <p className="text-right mt-2 mb-4">
                      Already a member? <span>Log in</span>
                    </p>
                  </div>
                </form>
                <p className="text-center">OR</p>
                <button>
                  Continue with
                  <img
                    src="../images/icons/google.png"
                    alt=""
                    className=" w-4 h-4 mb-1 ml-2 inline"
                  />
                </button>
                <button>
                  Continue with
                  <img
                    src="../images/icons/apple-logo.png"
                    alt=""
                    className="w-5 h-5 mb-1 ml-2 inline"
                  />
                </button>
              </>
            )}
          </div>
        </div>

        <div className="caption_container bg-white min-h-full w-1/2 text-black flex flex-col items-center">
          <div className="caption_content mt-40">
            {event === 1 && (
              <div className="">
                <h2>Sign up to be a part of the ELANO misfits!</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Officiis, ducimus aliquam sit fuga repellat dolorum?
                </p>
              </div>
            )}
            {event === 3 && <DemographyCaption />}
            {event === 2 && <EmailConfirmationCaption />}
            {event === 4 && <BadgeConfirmation />}
          </div>
        </div>
      </div>
    </Bounce>
  );
}

export default Signup;
