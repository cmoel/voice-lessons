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
  }

  save(e) {
    e.preventDefault();
    const {saveNewNote, student} = this.props;
    saveNewNote(student);
  }

  render() {
    const {student: {notes: {data, newNote}}, onChange} = this.props;
    return (
      <div className="form-group">
        <h5 style={{marginTop: 0}}>Lesson Log</h5>
        <NotesTable>
          <thead>
            <tr>
              <th>Timestamp</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {data.map((n, i) => <Note key={i} {...n} />)}
          </tbody>
        </NotesTable>
        <Input id="newNote" value={newNote} type="text" onChange={onChange} />
        <button
          className="btn btn-default"
          children="Add Entry"
          onClick={e => this.save(e)}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(null, mapDispatchToProps)(Notes);
