import React, {Component} from "react";
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import R from "ramda";

import * as actions from "../Student/actions";
import Item from "./Item";
import Search from "./Search";

const filter = (word, list) =>
  R.filter(
    R.where({
      name: R.test(RegExp(word, "i")),
    })
  )(list);

const Sidebar = ({previous, current, next, searchTerm}) =>
  <div className="pane-sm sidebar" style={{overflowY: "scroll"}}>
    <ul className="list-group">
      <Search />
      {filter(searchTerm, previous).map((student, i) =>
        <Item key={i} student={student} />
      )}
      <Item student={current} isActive />
      {filter(searchTerm, next).map((student, i) =>
        <Item key={i} student={student} />
      )}
    </ul>
  </div>;

Sidebar.propTypes = {
  previous: PropTypes.arrayOf(PropTypes.object).isRequired,
  current: PropTypes.object.isRequired,
  next: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = ({students, searchTerm}) => ({...students, searchTerm});
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
