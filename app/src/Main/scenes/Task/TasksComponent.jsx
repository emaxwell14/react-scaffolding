import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { string, func, shape, bool, arrayOf } from 'prop-types';

const propTypes = {
    getTasks: func,
    tasks: arrayOf(shape({
        name: string,
        description: string,
        createdDate: string,
        status: bool,
    })),
};

class TasksComponent extends Component {
    componentDidMount() {
        this.props.getTasks();
    }

    /* eslint-disable no-underscore-dangle */
    render() {
        const { tasks } = this.props;
        return (
            <div>
                <h1>Task List</h1>
                {tasks.length > 0 &&
                <ul>
                    {tasks.map(task => (
                        <li key={task._id}>
                            <Link to={`/tasks/${task._id}`}>{task.name}</Link>
                        </li>
                    ))}
                </ul>
                }
                {tasks.length === 0 &&
                <p style={{ color: 'red' }}>No Tasks Found!</p>
                }
            </div>
        );
    }
}

TasksComponent.propTypes = propTypes;

export default TasksComponent;

