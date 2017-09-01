import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import R from "ramda";

import * as actions from "./actions";
import Input from "./Input";
import Languages from "./Languages";
import RepList from "./RepList";
import Notes from "./Notes";

class Student extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleNoteInput = this.handleNoteInput.bind(this);
  }

  handleInputChange(e) {
    const { updateStudent, current: student } = this.props;
    updateStudent(R.assoc(e.target.id, e.target.value, student));
  }

  handleNoteInput(text) {
    const { updateStudent, current: student } = this.props;
    updateStudent(R.assocPath([ "notes", "newNote" ], text, student));
  }

  render() {
    // still missing inputs for languages and notes
    const {
      name,
      phone,
      school,
      graduationYear,
      languages,
      repList,
      notes,
    } = this.props.current;
    return (
      <form className="pane-group" style={{overflowY: "hidden"}}>
        <div className="pane-one-third padded-more">
          <Input
            id="name"
            label="Name"
            value={name}
            onChange={this.handleInputChange}
          />
          <Input
            id="phone"
            label="Phone"
            value={phone}
            onChange={this.handleInputChange}
          />
          <Input
            id="graduationYear"
            label="Graduation Year"
            value={graduationYear}
            onChange={this.handleInputChange}
          />
          <Languages value={languages} onChange={this.handleInputChange} />
          <RepList value={repList} onChange={this.handleInputChange} />
        </div>
        <div className="pane padded-more">
          <Notes student={this.props.current} onChange={this.handleNoteInput} />
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => state.students;
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Student);
