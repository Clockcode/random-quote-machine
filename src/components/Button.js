import React from "react";
import PropTypes from "prop-types";

import "./Quote.css";

const button = (props) => {
  if (props.isButton) {
    return (
      <button
        id={props.id}
        className="button"
        onClick={props.clicked}
        style={{ color: "black", backgroundColor: "white" }}
      >
        {props.children}
      </button>
    );
  }

  const href =
    "https://www.linkedin.com/shareArticle?mini=true&url=http://developer.linkedin.com&title=LinkedIn%20Developer%20Network&summary=My%20favorite%20developer%20program&source=LinkedIn" +
    encodeURIComponent('"' + props.quote + '" - ' + props.author);

  return (
    <a
      id={props.id}
      href={href}
      className="button"
      title={props.title}
      rel="noopener noreferrer"
      target="_blank"
      style={{ color: "white", backgroundColor: props.backgroundColor }}
    >
      {props.children}
    </a>
  );
};

button.propTypes = {
  id: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
};

export default button;
