import React, { Component } from 'react';
import PropTypes from 'prop-types';
import api from '../../../api';

const propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            taskId: PropTypes.string,
        }),
    }),
};

const defaultProps = {
    match: {},
};

class Task extends Component {
    constructor(props) {
        super(props);
        this.state = { task: {} };
        this.getTask = this.getTask.bind(this);
    }

    componentDidMount() {
        const { match: { params: { taskId } } } = this.props;
        this.getTask(taskId);
    }

    getTask(id) {
        api.getTask(id).then((task) => {
            this.setState({ task });
        });
    }

    render() {
        const { task } = this.state;
        return (
            <div>
                <h1>{task.name}</h1>
                {task &&
                <div>
                    <div><b>Description</b><span>: {task.description}</span></div>
                    <div><b>Created Date</b><span>: {task.createdDate}</span></div>
                    <div><b>Status</b><span>: {task.status && task.status[0]}</span></div>
                </div>
                }
            </div>
        );
    }
}

Task.propTypes = propTypes;
Task.defaultProps = defaultProps;

export default Task;

