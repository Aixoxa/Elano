import React, { useState, useEffect } from "react";
import "./EmailConfirmation.css";

function EmailConfirmation({ status, event }) {
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    const timerHandler =
      timer > 0 && setInterval(() => setTimer((timer) => timer - 1), 1000);
    return () => clearInterval(timerHandler);
  }, [timer]);

  return (
    <div className="relative">
      <h4 className="">Email Confirmation</h4>
      <div className="email_conf_container">
        <div className="icon_container">
          <img src="../images/icons/email.png" alt="" />
          <div className="timer_container">
            <img src="../images/icons/hour.png" alt="" />
          </div>
        </div>

        <p>
          Hello we need to make sure this is really you. Please take a moment to
          verify your email address using the link we sent to your mail. If you
          didn't see the email, kindly check your folder to confirm or click
          below.
        </p>
        <div className="mt-24 button_container">
          <button>
            Resend confirmation
            <span style={{ color: "#1848d8", marginLeft: 5 }}>{timer}s</span>
          </button>
          <button onClick={() => (event(3), status(true))}>Continue</button>
        </div>
      </div>
    </div>
  );
}

function EmailConfirmationCaption() {
  return (
    <div className="email_confirmation_caption">
      <h2>Help us move a step further.</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ipsam eius
        eos voluptatibus aperiam quibusdam!
      </p>
    </div>
  );
}

export { EmailConfirmation, EmailConfirmationCaption };
