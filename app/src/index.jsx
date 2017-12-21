import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Main from './Main/Main.jsx';
import api from './api.js';

class App extends React.Component {	
  
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

// TODO move text to sub
  render() {
    return ( 
      <div>
        <Main/>
        <h1>Hello React project</h1>
        <button onClick={this.callApi}>Call API</button>
        <p>{this.state.apiResponse}</p>
      </div>
    );
  }

}

render(
  (
    <BrowserRouter>
     <App/>
    </BrowserRouter>
  ), document.getElementById('app'));
