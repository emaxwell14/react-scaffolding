import { connect } from 'react-redux';
import MainComponent from './MainComponent';
import actions from './actions';

function mapStateToProps(state) {
    return {
        alerts: state.commonStore.alertReducer.alerts,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        clearAlert: alert => dispatch(actions.clearAlert(alert)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);
