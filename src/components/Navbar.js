import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Aplus from '../img/aplus.png';
import Google from '../img/google.png';
import GitHub from '../img/github.png';

class Navbar extends Component {
  componentDidMount() {
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll('.navbar-burger'),
      0
    );

    if ($navbarBurgers.length > 0) {
      $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {
          const target = el.dataset.target;
          const $target = document.getElementById(target);
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
        });
      });
    }
  }

  renderButton() {
    return (
      <div className="navbar-item">
        <a href="/auth/google" className="navbar-item">
          <img src={Google} alt="Google" width="28" height="28" />
        </a>
        <a href="/auth/github" className="navbar-item">
          <img src={GitHub} alt="GitHub" width="28" height="28" />
        </a>
      </div>
    );
  }

  render() {
    return (
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <img
              src={Aplus}
              alt="GPA Calculator"
              width="28"
              height="28"
              style={{ marginRight: 5 }}
            />
            <span>
              <strong>GPA Calculator</strong>
            </span>
          </Link>

          <Link
            to="#"
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </Link>
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
          <Link to="/course-list" className="navbar-item">
            <strong>Course List</strong>
          </Link>
          <div className="navbar-end">{this.renderButton()}</div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
