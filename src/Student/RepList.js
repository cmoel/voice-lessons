import React from "react";

const RepList = ({ value, onChange }) => (
  <div className="form-group">
    <label htmlFor="repList">Rep List</label>
    <textarea
      id="repList"
      className="form-control"
      placeholder="Rep List"
      value={value}
      onChange={onChange}
      rows="7"
    />
  </div>
);

export default RepList;
