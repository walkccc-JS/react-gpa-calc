import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Landing from './Landing';
import CourseList from './CourseList';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/course-list' component={CourseList} />
      </Switch>
    </div>
  );
}

export default App;
