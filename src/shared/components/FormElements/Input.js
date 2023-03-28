import React from "react";
import "../FormElements/Input.css";

const Input = (props) => {
  const element =
    props.element === "input" ? (
      <input id={props.id} type={props.type} placeholder={props.placeholder} />
    ) : (
      <textarea
        id={props.id}
        rows={props.rows}
        placeholder={props.placeholder}
      />
    );
  return (
    <div className={`form-control`}>
      <label htmlfor={props.id}>{props.label}</label>
      {element}
    </div>
  );
};

export default Input;
