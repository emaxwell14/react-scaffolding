import React from 'react';
import api from '../../../api.js';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: '-'};
    this.callApi = this.callApi.bind(this);
  }

  callApi() {
    const apiResponse = api.get().then((apiResponse) => {
      this.setState({ apiResponse });
    });
  }

  render() {
    return (
      <div>
        <h1>Hello React project</h1>
        <button onClick={this.callApi}>Call API</button>
        <p>{this.state.apiResponse}</p>
      </div>
    );
  }

}

export default Home;

