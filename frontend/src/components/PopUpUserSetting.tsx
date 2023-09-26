import React, { useState } from "react";
import avatarLogo from "/shark-avatar.png";

function PopUpUserSetting() {
  let [isToggle, setToggle] = useState(false);
  let handelToggle = () => setToggle(!isToggle);
  return (
    <>
      <div className="user-setting-modal-box">
        <div className="modal-content">
          <div className="modal-row">
            <div className="container-fluid">
              <div className="row justify-content-md-end justify-content-center align-items-center">
                <div className="col-12 col-md-6 container-form-user-setting">
                  <h2>Hey there!</h2>
                  <p>Let’s begin the adventure</p>
                  <div className="text-center">
                    <img src={avatarLogo} alt="" />
                  </div>
                  <form>
                    <div className="mb-3">
                      <label className="form-label primary-label">
                        Login *
                      </label>
                      <input
                        type="text"
                        className="form-control primary-input"
                        id="user-login"
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                        onClick={handelToggle}
                      />
                      <label className="form-label primary-label">
                        Enable two-factor authentication
                      </label>
                      <div className={!isToggle ? "close double-auth" : "open double-auth"}>
                        <label className="form-label primary-label">
                          Email *
                        </label>
                        <input
                          type="text"
                          className="form-control primary-input"
                          id="user-email"
                        />
                      </div>
                      <input type="submit" value="Submit" className="secondary-bnt"/>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PopUpUserSetting;
