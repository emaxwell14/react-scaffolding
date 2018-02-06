import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './scenes/Home/Home';
import Tasks from './scenes/Tasks/Tasks';
import Task from './scenes/Task/Task';

class Main extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/tasks" component={Tasks} />
                    <Route path="/tasks/:taskId" component={Task} />
                </Switch>
            </main>
        );
    }
}

export default Main;
