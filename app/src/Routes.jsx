import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Main from './Main/Main';
import Header from './Header/Header';

class Routes extends Component {
    render() {
        return (
            <div>
                <Route path="/" component={Header} />
                <Route path="/" component={Main} />
            </div>
        );
    }
}

export default Routes;
