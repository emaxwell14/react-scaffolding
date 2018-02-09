import React, { Component } from 'react';
import { translate } from 'react-i18next';
import { func, arrayOf, string } from 'prop-types';
import styles from './styles.scss';

const Alert = ({ text, clearAlert, t }) => ( // eslint-disable-line
    <li style={{ float: 'right' }}>
        <p>{t(text)}</p>
        <button onClick={() => clearAlert(text)} >Clear</button>
    </li>
);

const propTypes = {
    alerts: arrayOf(string),
    clearAlert: func,
    t: func,
};

@translate(['errors'])
class AlertList extends Component {
    render() {
        const { alerts, clearAlert, t } = this.props;
        return (
            <ul className={styles.alertList}>
                {alerts.map(alert => (<Alert key={alert} text={alert} t={t} clearAlert={clearAlert} />))}
            </ul>
        );
    }
}

AlertList.propTypes = propTypes;

export default AlertList;
