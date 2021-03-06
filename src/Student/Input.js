import React from "react";

const Input = ({ id, type, label, placeholder, value, onChange }) => (
  <div className="form-group">
    <input
      id={id}
      type={type || "text"}
      className="form-control"
      placeholder={placeholder || label}
      value={value || ""}
      onChange={onChange}
    />
  </div>
);

export default Input;
