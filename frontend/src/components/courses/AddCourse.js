import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { addCourse } from "./CourseActions";

class AddCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ""
    };
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onAddClick = () => {
    const course = {
      content: this.state.content
    };
    this.props.addCourse(course);
  };

  render() {
    return (
      <div>
        <h2>Add new course</h2>
        <Form>
          <Form.Group controlId="contentId">
            <Form.Control
              as="textarea"
              rows={3}
              name="content"
              placeholder="Enter course name"
              value={this.content}
              onChange={this.onChange}
            />
          </Form.Group>
        </Form>
        <Button variant="success" onClick={this.onAddClick}>
          Add course
        </Button>
      </div>
    );
  }
}

AddCourse.propTypes = {
  addCourse: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps, { addCourse })(withRouter(AddCourse));