import React, { Component } from 'react';
import Tree from './components/Tree';
import Footer from "./components/Footer";
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Tree />
        <Footer />
      </div>
    );
  }
}

export default App;
