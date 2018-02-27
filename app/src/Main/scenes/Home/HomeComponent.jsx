import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import { Button } from 'reactstrap';


const propTypes = {
    callApi: PropTypes.func,
    apiResponse: PropTypes.string,
    createAlert: PropTypes.func,
    t: PropTypes.func,
};

@translate()
class HomeComponent extends Component {
    render() {
        const { callApi, apiResponse, t, createAlert } = this.props;
        return (
            <div>
                <h1>{t('home.title')}</h1>
                <h3>{t('Alert Demo')}</h3>
                <Button color="success" onClick={callApi}>{t('actions.callApi')}</Button>
                <Button color="info" onClick={createAlert}>{t('actions.createAlert')}</Button>
                <p>{apiResponse}</p>
            </div>
        );
    }
}

HomeComponent.propTypes = propTypes;

export default HomeComponent;

