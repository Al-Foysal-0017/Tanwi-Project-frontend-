import React from "react";
import "./Footer.css";
// import { fa } from '@fortawesome/free-solid-svg-icons';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import {} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const handleUrl = (url) => {
    return () => window.open(url);
  };
  return (
    <footer>
      <section className="pt-5 mt-5">
        <div className="row  footer text-secondary ">
          <div className="col-md 3 ">
            <ul style={{ paddingTop: "20px" }}>
              <li>Emergency Dental Care</li>
              <li>Check Up</li>
              <li>Treatment of Personal Diseases </li>
              <li>Tooth Extraction</li>
              <li>Check Up</li>
            </ul>
          </div>

          <div className="col-md 3">
            <h6>Services</h6>
            <ul>
              <li>Emergency Dental Care</li>
              <li>Check Up</li>
              <li>Treatment of Personal Diseases </li>
              <li>Tooth Extraction</li>
              <li>Check Up</li>
              <li>Check Up</li>
              <li>Check Up</li>
            </ul>
          </div>
          <div className="col-md 3">
            <h6>Oral Health</h6>
            <ul>
              <li>Emergency Dental Care</li>
              <li>Check Up</li>
              <li>Treatment of Personal Diseases </li>
              <li>Tooth Extraction</li>
              <li>Check Up</li>
              <li>Check Up</li>
              <li>Check Up</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h6>Our Address</h6>
            <p>
              New York-101010 Hudson <br />
              Yards
            </p>
            <div className="mt-5 pt-3 pb-5">
              <FontAwesomeIcon
                icon={faGithub}
                size="50px"
                style={{ padding: "1%" }}
                onClick={handleUrl("https://github.com/")}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                icon={faFacebook}
                style={{ padding: "1%", size: "100px" }}
                onClick={handleUrl(
                  "https://www.facebook.com/tuli.chakraborty.7165/"
                )}
              />
            </div>
            <p className="text-secondary">Call now:013********</p>
          </div>
        </div>
        {/* <footer> </footer> */}
      </section>
      <small>
        <p style={{ textAlign: "center" }}>
          Copyright {new Date().getFullYear()} All right reserved
        </p>
      </small>
    </footer>
  );
};

export default Footer;
