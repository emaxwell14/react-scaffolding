import React, { Component } from 'react';
import { translate } from 'react-i18next';
import { func, shape, string } from 'prop-types';
import { Alert } from 'reactstrap';
import classnames from 'classnames';
import autobind from 'autobind-decorator';

const propTypes = {
    clearAlert: func,
    t: func,
    alert: shape({
        id: string,
        behavior: string,
        header: string,
        body: string,
    }),
};

@translate(['errors'])
class CustomAlert extends Component {
    constructor(props) {
        super(props);
        this.setTimeout(props.alert);
    }

    @autobind
    setTimeout(alert) {
        const { clearAlert } = this.props;
        setTimeout(() => clearAlert(alert.id), 3000);
    }

    render() {
        const { clearAlert, t, alert } = this.props;
        return (
            <Alert key={alert} color={alert.behavior} toggle={() => clearAlert(alert)}>
                {alert.header && <h6>{t(alert.header)}</h6>}
                <i className={classnames(['fa', {
                    'fa-check': alert.behavior === 'success',
                    'fa-warning': alert.behavior === 'danger',
                    'fa-info': alert.behavior !== 'success' && alert.behavior !== 'danger',
                }])}
                />&nbsp;
                <text>{t(alert.body)}</text>
            </Alert>
        );
    }
}

CustomAlert.propTypes = propTypes;

export default CustomAlert;
