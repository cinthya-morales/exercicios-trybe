import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const taskList = ['andar', 'comer', 'caminhar', 'escrever', 'cozinhar']

class App extends React.Component {
  render() {
    return (
      <ul>{ taskList.map( tasks => Task(tasks))}</ul>
    );
  }
}

export default App;
