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
    const { courses } = this.props.courses;

    if (courses.length === 0) {
      return <h2>Please add your first course</h2>;
    }

    let items = courses.map(course => {
      return <Course key={course.id} course={course} />;
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
  courses: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  courses: state.courses
});

export default connect(mapStateToProps, {
  getCourses
})(withRouter(CourseList));