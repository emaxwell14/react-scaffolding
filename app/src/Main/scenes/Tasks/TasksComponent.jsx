import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { string, func, shape, bool, arrayOf } from 'prop-types';
import { translate } from 'react-i18next';

const propTypes = {
    getTasks: func,
    tasks: arrayOf(shape({
        name: string,
        description: string,
        createdDate: string,
        status: bool,
    })),
    t: func,
};

@translate()
class TasksComponent extends Component {
    componentDidMount() {
        this.props.getTasks();
    }

    /* eslint-disable no-underscore-dangle */
    render() {
        const { tasks, t } = this.props;
        const hasTasks = tasks && tasks.length > 0;
        return (
            <div>
                <h1>{t('tasks.listTitle')}</h1>
                {hasTasks &&
                    <ul>
                        {tasks.map(task => (
                            <li key={task._id}>
                                <Link to={`/tasks/${task._id}`}>{task.name}</Link>
                            </li>
                        ))}
                    </ul>
                }
                {!hasTasks &&
                    <p style={{ color: 'red' }}>{t('tasks.listEmpty')}</p>
                }
            </div>
        );
    }
}

TasksComponent.propTypes = propTypes;

export default TasksComponent;

