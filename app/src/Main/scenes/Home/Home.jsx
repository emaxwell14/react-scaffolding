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
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
