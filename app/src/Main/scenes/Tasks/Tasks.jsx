import React, { Component } from 'react';
import api from '../../../api.js';

class Tasks extends Component {
  constructor(props) {
    super(props);
    this.state = { tasks: [] };
    this.getTasks = this.getTasks.bind(this);
  }

  componentDidMount() {
    this.getTasks();
  }

  getTasks() {
    api.getTasks().then((tasks) => {
      console.log('in Then');
      console.log(tasks);
      this.setState({ tasks });
    });
  }

  render() {
    const { tasks } = this.state;
    console.log(this.state);
    console.log(tasks);
    return (
      <div>
        <h1>Task List</h1>
	{tasks.length > 0 &&
	  <ul>
            {tasks.map(task => (<li key={task._id}>{task.name}</li>))}
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

