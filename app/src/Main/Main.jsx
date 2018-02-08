import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Routes from './Routes';

class Main extends Component {
    render() {
        return (
            <main>
                <Route component={Routes} />
            </main>
        );
    }
}

export default Main;
