import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import logo from "/logo.svg";
import logo42 from "/42-logo.png";

function PopUpAuth() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className="primary-bnt" onClick={() => setIsOpen(true)}>
        Join us
      </button>

      {isOpen && (
        <div className="modal-box">
          <div className="modal-content">
            <a
              onClick={() => setIsOpen(false)}
              href="#"
              className="close-p-auth"
            >
              <FontAwesomeIcon icon={faClose} />
            </a>
            <img src={logo} alt="sharke" className="logo" />
            <p>Welcome to SHARKE ! <br /> Let’s begin the adventure</p>
            <div className="d-flex align-items-center justify-content-around">
              <a href="">
                <img src={logo42} alt="" className="icon-auth" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PopUpAuth;
