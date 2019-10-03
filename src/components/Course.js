import React, { Component } from 'react';
import './Course.css';

class Course extends Component {
  state = {
    isEditing: false,
    courseName: this.props.courseName,
    credits: this.props.credits,
    grade: this.props.grade
  };

  handleRemove = () => {
    this.props.removeCourse(this.props.id);
  };

  toggleCourse = () => {
    this.setState({ isEditing: !this.state.isEditing });
  };

  handleUpdate = e => {
    e.preventDefault();
    this.props.updateCourse(
      this.props.id,
      this.state.courseName,
      this.state.credits,
      this.state.grade
    );
    this.setState({ isEditing: false });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleToggle = e => {
    this.props.toggleCourse(this.props.id);
  };

  render() {
    let result;
    if (this.state.isEditing) {
      result = (
        <div className="Course">
          <form onSubmit={this.handleUpdate}>
            <input
              type="text"
              name="courseName"
              id={`courseName-${this.props.id}`}
              placeholder="Course Name"
              value={this.state.courseName}
              onChange={this.handleChange}
              className="courseName"
            />

            <input
              type="text"
              name="credits"
              id={`credits-${this.props.id}`}
              placeholder="Credits"
              required
              value={this.state.credits}
              onChange={this.handleChange}
              className="credits"
            />

            <input
              type="text"
              name="grade"
              id={`grade-${this.props.id}`}
              placeholder="Grade"
              required
              value={this.state.grade}
              onChange={this.handleChange}
              className="grade"
            />

            <button>Save</button>
          </form>
        </div>
      );
    } else {
      result = (
        <div className="Course">
          <li
            onClick={this.handleToggle}
            className={this.props.counted ? '' : 'striked'}
          >
            {this.props.courseName} ({this.props.credits}): {this.props.grade}
          </li>
          <div className="buttons">
            <button onClick={this.toggleCourse}>
              <i className="fas fa-pen" />
            </button>
            <button onClick={this.handleRemove}>
              <i className="fas fa-trash" />
            </button>
          </div>
        </div>
      );
    }

    return result;
  }
}

export default Course;
