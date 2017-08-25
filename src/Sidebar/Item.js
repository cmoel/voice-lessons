import React, {Component} from "react";
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import * as actions from "../Student/actions";

const Item = ({showStudent, student, isActive}) => {
  const {name} = student;
  return (
    <li className={`list-group-item ${isActive ? "active" : ""}`} onClick={_ => showStudent(student)}>
      <div className="media-body">
        <strong>
          {name.length > 0 ? name : "New Student"}
        </strong>
      </div>
    </li>
  );
};

Item.propTypes = {
  student: PropTypes.shape({name: PropTypes.string.isRequired}).isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(null, mapDispatchToProps)(Item);
