import React, {Component} from "react";
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import * as actions from "./actions";

const Search = ({updateSearch}) =>
  <li className="list-group-header">
    <input
      className="form-control"
      type="text"
      placeholder="Search"
      onChange={e => updateSearch(e.target.value)}
    />
  </li>;

Search.propTypes = {};

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(null, mapDispatchToProps)(Search);
