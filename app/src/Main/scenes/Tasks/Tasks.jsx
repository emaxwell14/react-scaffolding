import { connect } from 'react-redux';
import actions from './actions';
import TasksComponent from './TasksComponent';

function mapStateToProps(state) {
    return {
        tasks: state.mainStore.tasksStore.tasks,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getTasks: () => dispatch(actions.getTasks()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksComponent);
