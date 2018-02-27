import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { arrayOf, string, func, shape } from 'prop-types';
import Routes from './Routes';
import AlertList from '../common/alert/AlertList';

const propTypes = {
    alerts: arrayOf(shape({
        id: string,
        behavior: string,
        header: string,
        body: string,
    })),
    clearAlert: func,
};

class MainComponent extends Component {
    render() {
        const { clearAlert } = this.props;
        return (
            <main>
                <AlertList alerts={this.props.alerts} clearAlert={clearAlert} />
                <Route component={Routes} />
            </main>
        );
    }
}

MainComponent.propTypes = propTypes;

export default MainComponent;
