import React, { Component } from 'react';
import api from '../../../api';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: '-' };
        this.callApi = this.callApi.bind(this);
    }

    callApi() {
        api.get().then((apiResponse) => {
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

