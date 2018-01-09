import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './scenes/Home/Home.jsx';
import Tasks from './scenes/Tasks/Tasks.jsx';
import Task from './scenes/Task/Task.jsx';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/tasks' component={Tasks} />
      <Route path='/tasks/:taskId' component={Task} />
    </Switch>
  </main>
);


export default Main;

