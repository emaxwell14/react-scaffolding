import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    callApi: PropTypes.func,
    apiResponse: PropTypes.string,
};


class HomeComponent extends Component {
    render() {
        const { callApi, apiResponse } = this.props;
        return (
            <div>
                <h1>Hello React project</h1>
                <button onClick={callApi}>Call API</button>
                <p>{apiResponse}</p>
            </div>
        );
    }
}

HomeComponent.propTypes = propTypes;

export default HomeComponent;

