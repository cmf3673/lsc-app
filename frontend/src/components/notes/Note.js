import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { deleteCourse, updateCourse } from "./NotesActions";
import { Button } from "react-bootstrap";

class Note extends Component {
  onDeleteClick = () => {
    const { note } = this.props;
    this.props.deleteCourse(note.id);
  };
//   onUpperCaseClick = () => {
//     const { note } = this.props;
//     this.props.updateNote(note.id, {
//       content: note.content.toUpperCase() 
//     }); // sending note id and updated content
//   };
//   onLowerCaseClick = () => {
//     const { note } = this.props;
//     this.props.updateNote(note.id, {
//       content: note.content.toLowerCase()
//     });
//   };
  render() {
    const { note } = this.props;
    return (
      <div>
        <hr />
        <p>
          (id:{note.id}) {note.content}
        </p>
        <Button variant="danger" size="sm" onClick={this.onDeleteClick}>
          Delete
        </Button>
      </div>
    );
  }
}

Note.propTypes = {
  note: PropTypes.object.isRequired
};
const mapStateToProps = state => ({});

export default connect(mapStateToProps, { deleteCourse, updateCourse })(
  withRouter(Note)
);
