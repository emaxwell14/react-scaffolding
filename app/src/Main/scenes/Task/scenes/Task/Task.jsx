import { connect } from 'react-redux';
import actions from './actions';
import TaskComponent from './TaskComponent';

function mapStateToProps(state) {
    return {
        task: state.mainStore.tasksStore.taskStore.task,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getTask: id => dispatch(actions.getTask(id)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskComponent);
