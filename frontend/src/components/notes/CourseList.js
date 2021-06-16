import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getCourses } from "./CourseActions";

import Course from "./Course";

class CourseList extends Component {
  componentDidMount() {
    this.props.getCourses();
  }

  render() {
    const { notes } = this.props.notes;

    if (notes.length === 0) {
      return <h2>Please add your first course</h2>;
    }

    let items = notes.map(note => {
      return <Course key={note.id} course={note} />;
    });

    return (
      <div>
        <h2>Courses</h2>
        {items}
        <hr />
      </div>
    );
  }
}

CourseList.propTypes = {
  getCourses: PropTypes.func.isRequired,
  notes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  notes: state.notes
});

export default connect(mapStateToProps, {
  getCourses
})(withRouter(CourseList));