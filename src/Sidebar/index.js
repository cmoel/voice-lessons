import React, { Component } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as actions from "../Student/actions";
import Item from "./Item";

const Sidebar = ({ previous, current, next }) => (
  <div className="pane-sm sidebar">
    <ul className="list-group">
      {previous.map((student, i) => <Item key={i} student={student} />)}
      <Item student={current} />
      {next.map((student, i) => <Item key={i} student={student} />)}
    </ul>
  </div>
);

Sidebar.propTypes = {
  previous: PropTypes.arrayOf(PropTypes.object).isRequired,
  current: PropTypes.object.isRequired,
  next: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => state.students;
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
