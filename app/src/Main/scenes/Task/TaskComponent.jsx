import React, { Component } from 'react';
import { string, func, shape, arrayOf } from 'prop-types';
import { translate } from 'react-i18next';

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
    t: func,
};

@translate()
class TaskComponent extends Component {
    componentDidMount() {
        const { match: { params: { taskId } }, getTask } = this.props;
        getTask(taskId);
    }

    render() {
        const { task, t } = this.props;
        return (
            <div>
                <h1>{task.name}</h1>
                {task &&
                <div>
                    <div><b>{t('tasks.description')}</b><span>: {task.description}</span></div>
                    <div><b>{t('tasks.createdDate')}</b><span>: {task.createdDate}</span></div>
                    <div>
                        <b>{t('tasks.status.name')}</b>
                        {task.status && <span>: {t(`tasks.status.type.${task.status[0]}`)}</span>}
                        {!task.status && <span>: {t('tasks.status.type.none')}</span>}
                    </div>
                </div>
                }
            </div>
        );
    }
}

TaskComponent.propTypes = propTypes;

export default TaskComponent;

