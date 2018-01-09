import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../../../api';

class Tasks extends Component {
    constructor(props) {
        super(props);
        this.state = { tasks: [] };
        this.getTasks = this.getTasks.bind(this);
        this.openTask = this.openTask.bind(this);
    }

    componentDidMount() {
        this.getTasks();
    }

    getTasks() {
        api.getTasks().then((tasks) => {
            this.setState({ tasks });
        });
    }

    /* eslint-disable no-underscore-dangle */
    render() {
        const { tasks } = this.state;
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

export default Tasks;

