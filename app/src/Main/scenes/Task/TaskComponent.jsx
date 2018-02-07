import React, { Component } from 'react';
import { string, func, shape, arrayOf } from 'prop-types';

const propTypes = {
    match: shape({
        params: shape({
            taskId: string,
        }),
    }),
    getTask: func,
    task: shape({
        name: string,
        description: string,
        createdDate: string,
        status: arrayOf(string),
    }),
};


class TaskComponent extends Component {
    componentDidMount() {
        const { match: { params: { taskId } }, getTask } = this.props;
        getTask(taskId);
    }

    render() {
        const { task } = this.props;
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

TaskComponent.propTypes = propTypes;

export default TaskComponent;

