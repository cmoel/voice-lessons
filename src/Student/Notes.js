import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import * as actions from "./actions";
import NotesTable from "./NotesTable";
import Note from "./Note";
import Input from "./Input";

class Notes extends Component {
  constructor(props) {
    super(props);
    this.save = this.save.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  onChange(e) {
    const {target: {value}} = e;
    this.props.onChange(value.replace(/[\r\n]+/g, ""));
  }

  onKeyDown(e) {
    const {keyCode} = e;
    if (keyCode === 13 || keyCode === 10) this.save();
  }

  save() {
    const {saveNewNote, student} = this.props;
    saveNewNote(student);
  }

  render() {
    const {student: {notes: {data, newNote}}} = this.props;
    return (
      <div className="form-group">
        <h5 style={{marginTop: 0}}>Lesson Log</h5>
        <NotesTable>
          <thead>
            <tr>
              <th style={{width: 150}}>Timestamp</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {data.map((n, i) => <Note key={i} {...n} />)}
          </tbody>
        </NotesTable>
        <textarea
          style={{resize: "none"}}
          id="newNote"
          placeholder="New Entry..."
          className="form-control"
          value={newNote}
          onChange={this.onChange}
          onKeyDown={this.onKeyDown}
          rows="3"
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(null, mapDispatchToProps)(Notes);
