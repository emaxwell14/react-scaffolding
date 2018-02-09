import React, { Component } from 'react';
import { translate } from 'react-i18next';
import { func, arrayOf, string } from 'prop-types';
import classnames from 'classnames';
import styles from './styles.scss';
import CustomAlert from './CustomAlert';


const propTypes = {
    alerts: arrayOf(string),
    clearAlert: func,
};

@translate(['errors'])
class AlertList extends Component {
    render() {
        const { alerts, clearAlert } = this.props;
        return (
            <ul className={classnames([styles.alertList, 'h-100'])}>
                {alerts.map(alert => (
                    <CustomAlert key={alert} clearAlert={clearAlert} alert={alert} />
                ))}
            </ul>
        );
    }
}

AlertList.propTypes = propTypes;

export default AlertList;
