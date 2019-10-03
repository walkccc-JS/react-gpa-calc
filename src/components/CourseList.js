import React, { Component } from 'react';
import NewCourseForm from './NewCourseForm';
import Course from './Course';
import { calculateGPA } from '../utils';
import { scales } from '../constants';
import './CourseList.css';

class CourseList extends Component {
  // scale: 4.0, 4.3, 100
  state = { courses: [], scale: '4.3' };

  createCourse = newCourse => {
    this.setState({ courses: [...this.state.courses, newCourse] });
  };

  removeCourse = id => {
    this.setState({
      courses: this.state.courses.filter(course => course.id !== id)
    });
  };

  updateCourse = (id, courseName, credits, grade) => {
    const courses = this.state.courses.map(course => {
      if (course.id === id) {
        return { ...course, courseName, credits, grade };
      }
      return course;
    });

    this.setState({ courses });
  };

  toggleCourse = id => {
    const courses = this.state.courses.map(course => {
      if (course.id === id) {
        return { ...course, counted: !course.counted };
      }
      return course;
    });

    this.setState({ courses });
  };

  toggleScale = scale => {
    this.setState({ scale });
  };

  renderScales = scale => {
    return scales.map(scale => {
      return (
        <button
          key={scale}
          className={scale === this.state.scale ? 'button selected' : 'button'}
          onClick={() => this.toggleScale(scale)}
        >
          {scale}
        </button>
      );
    });
  };

  render() {
    const courses = this.state.courses.map(course => {
      return (
        <Course
          key={course.id}
          id={course.id}
          courseName={course.courseName}
          credits={course.credits}
          grade={course.grade}
          counted={course.counted}
          removeCourse={this.removeCourse}
          updateCourse={this.updateCourse}
          toggleCourse={this.toggleCourse}
        />
      );
    });

    return (
      <div className="CourseList">
        <h1>
          Course List
          <span>A Simple GPA Calculator</span>
        </h1>
        <NewCourseForm
          createCourse={this.createCourse}
          scale={this.state.scale}
        />
        <div className="buttons">{this.renderScales()}</div>
        <ul>{courses}</ul>
        <h2>
          Your GPA: {calculateGPA(this.state.courses).gpa}
          <br />
          Total credits: {calculateGPA(this.state.courses).credits}
        </h2>
      </div>
    );
  }
}

export default CourseList;
