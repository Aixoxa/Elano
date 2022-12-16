import React, { useState, useEffect } from "react";
import "./Chat.css";
import Chatnav from "../../Assets/CHAT-NAV/Chatnav";
import Chathome from "../../Assets/CHAT-HOME/Chathome";
import Feeds from "../../Assets/FEEDS/Feeds";
import Search from "../../Assets/SEARCH/Search";
import InputEmoji from "react-input-emoji";
import { Fade } from "react-reveal";

function Chat() {
  const event = JSON.parse(window.localStorage.getItem("event"));

  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const [chatEvent, setChatEvent] = useState(!event ? 2 : event);

  useEffect(() => {
    if (event !== null) setChatEvent(event);
  }, []);

  useEffect(() => {
    localStorage.setItem("event", JSON.stringify(chatEvent));
  }, [chatEvent]);

  return (
    <div>
      <div className="chat_system_container">
        {/* CHAT NAVIGATOR */}
        <div className="chat_navigator">
          <Chatnav setChatEvent={setChatEvent} />
        </div>

        <div className="users_parent_container">
          <div className="pb-6 pt-10">
            <Search />
          </div>
          {/* USERS HOME */}
          {chatEvent == 2 && (
            <Fade>
              <div className="users_home">
                <Chathome />
              </div>
            </Fade>
          )}

          {/* USERS */}
          {chatEvent == 3 && (
            <Fade>
              <div className="users_container">
                <div className="users">
                  <div className="users_chat_avatar">
                    <div className="img_container">
                      <img src="../images/timo.jpg" alt="" />
                    </div>
                    <div className="">
                      <h4 className="inline-block font-semibold text-sm">
                        Timothee.fig
                      </h4>
                      <p className=" font-light text-sm">
                        Check out the new prototype i sent to your mail.
                      </p>
                    </div>
                  </div>

                  <div className="users_chat_duration">
                    <span>10 mins ago</span>
                    <span>3</span>
                  </div>
                </div>
              </div>
            </Fade>
          )}

          {/* MOBILE USERS DM AND CHAT AREA */}

          <div className="mobile_chat_view">
            {chatEvent === 3 && (
              <Fade>
                <div
                  className="mobile_users_container"
                  onClick={() => setChatEvent(6)}
                >
                  <div className="users">
                    <div className="users_chat_avatar">
                      <div className="img_container">
                        <img src="../images/timo.jpg" alt="" />
                      </div>
                      <div className="">
                        <h4 className="inline-block font-semibold text-sm">
                          Timothee.fig
                        </h4>
                        <p className=" font-light text-sm">
                          Check out the new prototype i sent to your mail.
                        </p>
                      </div>
                    </div>

                    <div className="users_chat_duration">
                      <span>10 mins ago</span>
                      <span>3</span>
                    </div>
                  </div>
                </div>
              </Fade>
            )}

            {chatEvent === 6 && (
              <Fade>
                <div className="mobile_users_chat_container">
                  <div className="current_chatter flex">
                    <div
                      style={{ width: "40%" }}
                      className=""
                      onClick={() => setChatEvent(3)}
                    >
                      <img
                        src="../images/icons/arrow.png"
                        alt=""
                        className="h-5 w-5 ml-4"
                      />
                    </div>

                    <span>Timothee.fig</span>
                  </div>
                  <div className="sender_container">
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Asperiores, necessitatibus.
                    </p>
                  </div>
                  <div className="sender_container">
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Asperiores, necessitatibus.
                    </p>
                  </div>
                  <div className="receiver_container">
                    <p>Lorem</p>
                  </div>

                  <div className="receiver_container">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nobis dolores laudantium itaque?
                    </p>
                  </div>
                  <form className="chat_box">
                    <div className="chat_image px-2">
                      <label
                        htmlFor="imageFile"
                        className="inline-block h-6 w-6"
                      >
                        <img
                          src="../images/icons/gallery.png"
                          alt=""
                          className="object-cover"
                        />
                      </label>
                      <input
                        type="file"
                        id="imageFile"
                        accept="image/*"
                        className="hidden"
                      />
                    </div>
                    <div className="pl-2 pr-2">
                      <label htmlFor="gifFile" className="inline-block h-6 w-6">
                        <img
                          src="../images/icons/gif.png"
                          alt=""
                          className="object-cover"
                        />
                      </label>
                      <input type="file" id="gifFile" className="hidden" />
                    </div>

                    <InputEmoji
                      cleanOnEnter
                      placeholder="Type a message"
                      borderRadius={0}
                      borderColor={"transparent"}
                      fontSize={17}
                      maxLength={500}
                    />
                    <div className="px-2 transform translate-x-1">
                      <label
                        style={{
                          backgroundColor: "#1848d8",
                        }}
                        htmlFor="submit_btn"
                        className="inline-block rounded-full p-2 h-8 w-8"
                      >
                        <img
                          src="../images/icons/send.png"
                          alt=""
                          className="h-full w-full object-cover"
                        />
                      </label>
                      <input type="submit" id="submit_btn" className="hidden" />
                    </div>
                  </form>
                </div>
              </Fade>
            )}
          </div>
        </div>

        {/* USERS CHAT */}
        {chatEvent === 3 && (
          <Fade>
            <div className="users_chat_container">
              <div className="current_chatter flex">
                <div style={{ width: "40%" }} className="">
                  {/* <img
                    src="../images/icons/arrow.png"
                    alt=""
                    className="h-5 w-5 ml-4"
                  /> */}
                </div>

                <span>Timothee.fig</span>
              </div>
              <div className="sender_container">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, necessitatibus.
                </p>
              </div>
              <div className="sender_container">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, necessitatibus.
                </p>
              </div>
              <div className="receiver_container">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                  dolores laudantium itaque?
                </p>
              </div>

              <div className="receiver_container">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                  dolores laudantium itaque?
                </p>
              </div>
              <form className="chat_box">
                <div className="chat_image px-2">
                  <label htmlFor="imageFile" className="inline-block h-6 w-6">
                    <img
                      src="../images/icons/gallery.png"
                      alt=""
                      className="object-cover"
                    />
                  </label>
                  <input
                    type="file"
                    id="imageFile"
                    accept="image/*"
                    className="hidden"
                  />
                </div>
                <div className="pl-2 pr-2">
                  <label htmlFor="gifFile" className="inline-block h-6 w-6">
                    <img
                      src="../images/icons/gif.png"
                      alt=""
                      className="object-cover"
                    />
                  </label>
                  <input type="file" id="gifFile" className="hidden" />
                </div>

                <InputEmoji
                  cleanOnEnter
                  placeholder="Type a message"
                  borderRadius={0}
                  borderColor={"transparent"}
                  fontSize={17}
                  maxLength={500}
                />
                <div className="px-2 transform translate-x-1">
                  <label
                    style={{
                      backgroundColor: "#1848d8",
                    }}
                    htmlFor="submit_btn"
                    className="inline-block rounded-full p-2 h-8 w-8"
                  >
                    <img
                      src="../images/icons/send.png"
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </label>
                  <input type="submit" id="submit_btn" className="hidden" />
                </div>
              </form>
            </div>
          </Fade>
        )}

        {/* USER FEEDS */}
        {chatEvent === 5 && (
          <Fade>
            <div className="chat_feeds">
              <Feeds />
            </div>
          </Fade>
        )}
      </div>
    </div>
  );
}

export default Chat;
