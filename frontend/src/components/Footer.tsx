import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from '@fortawesome/free-solid-svg-icons';


function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <p className="text">
              <FontAwesomeIcon icon={faCopyright} />
                Copyright - 2023 <br /> All rights reserved, Powered by{" "}
              <strong>SHARK Corporate</strong>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
