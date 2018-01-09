import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Main from './Main/Main.jsx';
import Header from './Header/Header.jsx';

class App extends Component {
  
  render() {
    return ( 
      <div>
        <Header/>
        <Main/>
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
