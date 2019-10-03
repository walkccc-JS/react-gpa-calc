import React, { Component } from 'react';
import uuid from 'uuid';
import './NewCourseForm.css';

class NewCourseForm extends Component {
  state = { courseName: '', credits: '', grade: '' };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.createCourse({
      ...this.state,
      credits: Number(this.state.credits),
      id: uuid(),
      counted: true
    });
    this.setState(prevState => ({
      courseName: '',
      credits: prevState.credits,
      grade: ''
    }));
  };

  render() {
    return (
      <div className="NewCourseForm">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="courseName"
            id="courseName"
            placeholder="Course Name"
            value={this.state.courseName}
            onChange={this.handleChange}
            className="courseName"
          />

          <input
            type="text"
            name="credits"
            id="credits"
            placeholder="Credits"
            required
            value={this.state.credits}
            onChange={this.handleChange}
            className="credits"
          />

          <input
            type="text"
            name="grade"
            id="grade"
            placeholder="Grade"
            required
            value={this.state.grade}
            onChange={this.handleChange}
            className="grade"
          />

          <button>
            <i className="fas fa-plus" />
          </button>
        </form>
      </div>
    );
  }
}

export default NewCourseForm;
