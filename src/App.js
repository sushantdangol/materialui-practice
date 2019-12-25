import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import List from './components/List';
import Add from './components/Add'

class App extends React.Component {
  render() {
    return (
      <div className="App" >
        <h1>Okhati Input Test</h1>
        <Add />
      </div>
    );
  }
}

export default App;
