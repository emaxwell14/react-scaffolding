import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

const propTypes = {
    callApi: PropTypes.func,
    apiResponse: PropTypes.string,
    t: PropTypes.func,
};

@translate()
class HomeComponent extends Component {
    render() {
        const { callApi, apiResponse, t } = this.props;
        return (
            <div>
                <h1>{t('home.title')}</h1>
                <button onClick={callApi}>{t('actions.callApi')}</button>
                <p>{apiResponse}</p>
            </div>
        );
    }
}

HomeComponent.propTypes = propTypes;

export default HomeComponent;

