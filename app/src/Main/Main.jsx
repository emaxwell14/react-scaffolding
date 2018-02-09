import { connect } from 'react-redux';
import MainComponent from './MainComponent';
import alertActions from '../common/alert/actions';

function mapStateToProps(state) {
    return {
        alerts: state.commonStore.alertReducer.alerts,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        clearAlert: alert => dispatch(alertActions.clearAlert(alert)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);
