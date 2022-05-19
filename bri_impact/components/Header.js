import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import faGem from "@fortawesome/fontawesome-free-regular/faGem";
import React from "react";

const Header = (props) => {
  return (
    <header id="header" style={props.timeout ? { display: "none" } : {}}>
      <div className="logo">
        {/*<span className="icon fa-diamond"></span>*/}
        <FontAwesomeIcon icon={faGem} transform="grow-18" />
      </div>
      <div className="content">
        <div className="inner">
          <h1>BRI IMPACT</h1>
          <p>
            WHAT ARE THE BRI'S ECONOMIC ON ITS NEIGHBORING COUNTRIES? <br />A
            CASE STUDY ON KAZAKHSTAN <br />
            Rachel Zhou
          </p>
        </div>
      </div>
      <nav>
        <ul>
          <li>
            <a
              href="javascript:;"
              onClick={() => {
                props.onOpenArticle("intro");
              }}
            >
              Intro
            </a>
          </li>
          <li>
            <a
              href="javascript:;"
              onClick={() => {
                props.onOpenArticle("methods");
              }}
            >
              Methods
            </a>
          </li>
          <li>
            <a
              href="javascript:;"
              onClick={() => {
                props.onOpenArticle("data");
              }}
            >
              Data & analysis
            </a>
          </li>
          <li>
            <a
              href="javascript:;"
              onClick={() => {
                props.onOpenArticle("results");
              }}
            >
              Results
            </a>
          </li>
          <li>
            <a
              href="javascript:;"
              onClick={() => {
                props.onOpenArticle("conclusion");
              }}
            >
              Conclusion
            </a>
          </li>
          <li>
            <a
              href="javascript:;"
              onClick={() => {
                props.onOpenArticle("citations");
              }}
            >
              Bibliography
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
