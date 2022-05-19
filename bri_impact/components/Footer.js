import PropTypes from "prop-types";
import React from "react";

const Footer = (props) => (
  <footer id="footer" style={props.timeout ? { display: "none" } : {}}>
    <p> ASIAN 4454, Spring 2022</p>
  </footer>
);

Footer.propTypes = {
  timeout: PropTypes.bool,
};

export default Footer;
