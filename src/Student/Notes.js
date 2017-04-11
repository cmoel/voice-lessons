import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as actions from "./actions";
import Note from "./Note";
import Input from "./Input";

class Notes extends Component {
  constructor(props) {
    super(props);
    this.save = this.save.bind(this);
  }

  save(e) {
    e.preventDefault();
    const { saveNewNote, student } = this.props;
    saveNewNote(student);
  }

  render() {
    const { student: { notes: { data, newNote } }, onChange } = this.props;
    return (
      <div className="form-group">
        <h5>Notes</h5>
        <ul children={data.map((n, i) => <Note {...n} />)} />
        <Input
          id="newNote"
          label="New Note"
          value={newNote}
          type="text"
          onChange={onChange}
        />
        <button
          className="btn btn-default"
          children="Add Note"
          onClick={e => this.save(e)}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(null, mapDispatchToProps)(Notes);
