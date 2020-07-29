import React from 'react';
import logo from './logo.svg';
import './App.css';

const person = [
  {name: 'Mahmudul Hasan', designation: 'CEO', salary: '$2650'},
  {name: 'Kamrul Islam', designation: 'Director', salary: '$2000'},
  {name: 'Muminur Rashid', designation: 'HR head', salary: '$1560'},
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Greet info={person[0]}></Greet>
        <Greet info={person[1]}></Greet>
        <Greet info={person[2]}></Greet>
      </header>
    </div>
  );
}

function Greet(props){
  
  const makeUp={
    color: 'cyan',
    margin: '5px',
    border: '2px solid blue',
    width: '300px',
  }
  const {name, designation, salary} = props.info;
  return (
    <div style={makeUp}>
      <h3>Hello {name}</h3>
      <h5> {designation} </h5>
      <h5> {salary} </h5>
    </div>
  );
}


export default App;
