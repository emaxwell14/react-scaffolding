import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import Home from './scenes/Home/Home';
import Task from './scenes/Task/Task';
import Tasks from './scenes/Tasks/Tasks';

class Routes extends Component {
    render() {
        return (
            <Container fluid>
                <Route exact path="/" component={Home} />
                <Route exact path="/tasks" component={Tasks} />
                <Route path="/tasks/:taskId" component={Task} />
            </Container>
        );
    }
}

export default Routes;
