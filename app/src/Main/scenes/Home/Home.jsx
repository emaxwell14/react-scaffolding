import { connect } from 'react-redux';
import actions from './actions';
import HomeComponent from './HomeComponent';

function mapStateToProps(state) {
    return {
        apiResponse: state.mainStore.homeStore.apiResponse,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        callApi: () => dispatch(actions.callApi()),
        createAlert: () => dispatch(actions.createAlert()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
