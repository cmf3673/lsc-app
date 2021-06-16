import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { deleteCourse, updateCourse } from "./CourseActions";
import { Button } from "react-bootstrap";

class Course extends Component {
  onDeleteClick = () => {
    const { course } = this.props;
    this.props.deleteCourse(course.id);
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
    const { course } = this.props;
    return (
      <div>
        <hr />
        <p>
          (id:{course.id}) {course.title} {/* FIXME: not showing up */}
        </p>
        <Button variant="danger" size="sm" onClick={this.onDeleteClick}>
          Delete
        </Button>
      </div>
    );
  }
}

Course.propTypes = {
  course: PropTypes.object.isRequired
};
const mapStateToProps = state => ({});

export default connect(mapStateToProps, { deleteCourse, updateCourse })(
  withRouter(Course)
);
