import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './scenes/Home/Home.jsx';
import Tasks from './scenes/Tasks/Tasks.jsx';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/tasks' component={Tasks} />
    </Switch>
  </main>
);


export default Main;

