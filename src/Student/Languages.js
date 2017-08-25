import React from "react";

const Languages = ({ value, onChange }) => (
  <div className="form-group">
    <textarea
      style={{resize: "none"}}
      id="languages"
      className="form-control"
      placeholder="Languages"
      value={value}
      onChange={onChange}
      rows="2"
    />
  </div>
);

export default Languages;
