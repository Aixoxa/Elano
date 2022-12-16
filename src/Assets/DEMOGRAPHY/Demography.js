import React, { useEffect } from "react";
import "./Demography.css";

function Demography({ status, event }) {
  useEffect(() => {
    const ageCheck = document.querySelector("#young_adult");
    const likesCheck = document.querySelector("#numbers");

    ageCheck.checked = true;
    likesCheck.checked = true;
  }, []);
  return (
    <div>
      <h2 className="my-6 text-2xl font-semibold demo_header">Demography</h2>
      <div className="demography_content">
        <form onSubmit={() => (event(4), status(true))}>
          <div className="mb-5">
            <h4>1. How old are you?</h4>
            <label htmlFor="teen" className="demo_radio">
              <input type="radio" id="teen" name="ageRadio" />
              <span></span>
              13-18
            </label>

            <label htmlFor="young_adult" className="demo_radio">
              <input type="radio" id="young_adult" name="ageRadio" />
              <span></span>
              19-30
            </label>

            <label htmlFor="mature_adult" className="demo_radio">
              <input type="radio" id="mature_adult" name="ageRadio" />
              <span></span>
              31 & above
            </label>
          </div>

          <div className="mb-5">
            <div className="">
              <h4>2. Which do you like more?</h4>
              <label htmlFor="letters" className="demo_radio">
                <input type="radio" id="letters" name="likesRadio" />
                <span></span>
                Letters
              </label>

              <label htmlFor="numbers" className="demo_radio">
                <input type="radio" id="numbers" name="likesRadio" />
                <span></span>
                Numbers
              </label>

              <label htmlFor="shapes" className="demo_radio">
                <input type="radio" id="shapes" name="likesRadio" />
                <span></span>
                Shapes
              </label>
            </div>
          </div>

          <div className="mb-5">
            <h4>3. Which of these five(5) resonates with you? (pick any 5)</h4>
            <div className="hobbies_container">
              <ul>
                <li>
                  <label htmlFor="health">
                    <input type="checkbox" id="health" />
                    <span></span>
                    Access to healthcare
                  </label>
                </li>
                <li>
                  <label htmlFor="love">
                    <input type="checkbox" id="love" />
                    <span></span>
                    Love
                  </label>
                </li>
                <li>
                  <label htmlFor="climate">
                    <input type="checkbox" id="climate" />
                    <span></span>
                    Climate change
                  </label>
                </li>
                <li>
                  <label htmlFor="incl">
                    <input type="checkbox" id="incl" />
                    <span></span>
                    inclusivity
                  </label>
                </li>
                <li>
                  <label htmlFor="economic">
                    <input type="checkbox" id="economic" />
                    <span></span>
                    Economic opportunities
                  </label>
                </li>
              </ul>

              <ul>
                <li>
                  <label htmlFor="mental">
                    <input type="checkbox" id="mental" />
                    <span></span>
                    Mental health protection
                  </label>
                </li>
                <li>
                  <label htmlFor="gender">
                    <input type="checkbox" id="gender" />
                    <span></span>
                    Gender equity
                  </label>
                </li>
                <li>
                  <label htmlFor="violence">
                    <input type="checkbox" id="violence" />
                    <span></span>
                    End to gun violence
                  </label>
                </li>
                <li>
                  <label htmlFor="art">
                    <input type="checkbox" id="art" />
                    <span></span>
                    Art
                  </label>
                </li>
                <li>
                  <label htmlFor="sustainability">
                    <input type="checkbox" id="sustainability" />
                    <span></span>
                    Sustainability
                  </label>
                </li>
              </ul>
            </div>
          </div>
          <div className="mb-5">
            <h4>4. Pick one(1) pill</h4>
            <div className="pill_container">
              <label htmlFor="life">
                <input type="radio" id="life" name="pillRadio" />
                <span>Immortality</span>
                Immortality
              </label>

              <label htmlFor="wealth">
                <input type="radio" id="wealth" name="pillRadio" />
                <span>5 years unlimited wealth</span>5 years unlimited wealth
              </label>

              <label htmlFor="time">
                <input type="radio" id="time" name="pillRadio" />
                <span>Time control</span>
                Time control
              </label>
            </div>
          </div>

          <div className="mb-5">
            <div className="">
              <h4>5. If you were to choose, where would you live?</h4>
              <label htmlFor="land" className="demo_radio">
                <input type="radio" id="land" name="locationRadio" />
                <span></span>
                On land
              </label>

              <label htmlFor="cloud" className="demo_radio">
                <input type="radio" id="cloud" name="locationRadio" />
                <span></span>
                On the clouds
              </label>

              <label htmlFor="water" className="demo_radio">
                <input type="radio" id="water" name="locationRadio" />
                <span></span>
                In water
              </label>
            </div>
          </div>

          <div className="mb-5">
            <h4>6. Select only 2</h4>
            <ul className="signup_interests">
              <li>
                <label htmlFor="fashion">
                  <input type="checkbox" id="fashion" />
                  <span></span>
                  Fashion
                </label>
              </li>
              <li>
                <label htmlFor="tech">
                  <input type="checkbox" id="tech" />
                  <span></span>
                  Technology
                </label>
              </li>
              <li>
                <label htmlFor="culture">
                  <input type="checkbox" id="culture" />
                  <span></span>
                  Culture
                </label>
              </li>
              <li>
                <label htmlFor="entertainment">
                  <input type="checkbox" id="entertainment" />
                  <span></span>
                  Entertainment
                </label>
              </li>
            </ul>
          </div>

          <div className="mb-5">
            <div className="">
              <h4>7. How would you describe yourself?</h4>
              <label htmlFor="shit" className="demo_radio">
                <input type="radio" id="shit" name="descRadio" />
                <span></span>
                The Shit
              </label>

              <label htmlFor="goat" className="demo_radio">
                <input type="radio" id="goat" name="descRadio" />
                <span></span>
                The G.O.A.T
              </label>

              <label htmlFor="dog" className="demo_radio">
                <input type="radio" id="dog" name="descRadio" />
                <span></span>
                The Big Dog
              </label>
            </div>
          </div>
          <div className="signup_btn">
            <input type="submit" value="Continue" />
          </div>
        </form>
      </div>
    </div>
  );
}

function DemographyCaption() {
  return (
    <div className="demography_caption">
      <h2>Help us understand you better!</h2>
      <p>
        You can only be a success if you are around people that understand you
        and love you!
      </p>
    </div>
  );
}

export { Demography, DemographyCaption };
