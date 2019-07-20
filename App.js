import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './parent/Login.jsx';
import route from './routing/router';
import {BrowserRouter, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './container/store';
function App() {
console.log("dsds")
  return (
    <div className="App">
      <Provider store = {store}>
        <route/>
        <Login/>
      </Provider>
    </div>
  );
}

export default App;
