import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

const products = [
  {name: 'DELL 19" monitor', price: 'BDT.13,500'},
  {name: 'HP 19.5" monitor', price: 'BDT.6,500'},
  {name: 'A4Tech Keyboard', price: 'BDT.780'},
  {name: 'Gamdias motherboard', price: 'BDT.6600'},
  {name: 'MaxGreen casing', price: 'BDT.2200'},
];
const employees = [
  {name: 'Thomas Harry', designation: 'CEO', joined: '22/03/11'},
  {name: 'David Billy', designation: 'Director', joined: '14/08/15'},
  {name: 'Paul Kent', designation: 'Manager', joined: '11/02/16'},
  {name: 'Sagar Desai', designation: 'HR Head', joined: '04/06/13'},
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hours></Hours>
        <ul>
          {
            employees.map(emp => <Employees employee={emp}></Employees>)
          }
        </ul>
        <Customers></Customers>
          <ul>
            {
              products.map(pd => <ShowProducts product={pd}></ShowProducts>)
            }
          </ul>
      </header>
    </div>
  );
}

function Hours(){
  const btnMakeUp = {
    backgroundColor: "gold",
    border: 'none',
    borderRadius: '5px',
    padding: '10px',
    margin: '5px',
  }
  const [hours, setHours] = useState(0);
  const addHandler = () => {setHours(hours+1)};
  const reduceHandler = () => {
    if(hours>0){
      setHours(hours-1);
    }
  };
  const resetHandler = () => {setHours(0)};
  return(
    <div>
      <h4>Hours at work: {hours}</h4>
      <button style={btnMakeUp} onClick={addHandler}>Add</button>
      <button style={btnMakeUp} onClick={reduceHandler}>Reduce</button>
      <button style={btnMakeUp} onClick={resetHandler}>Reset</button>
    </div>
  )
}

function Employees(props){
  const EmployeesStyle = {
    color: "rgb(98, 218, 253)",
    backgroundColor: 'black',
    border: '2px solid blue',
    borderRadius: '15px',
    margin: '10px',
    padding: '10px',
    margin: '10px',
    width: '200px',
  }
  const contactStyle = {
    color: "rgb(98, 218, 253)",
    backgroundColor: 'blue',
    border: 'none',
    borderRadius: '5px',
    padding: '10px',
  }
  const {name, designation, joined} = props.employee;
  return(
    <div style={EmployeesStyle}>
      <h4>{name}</h4>
      <h5>{designation}</h5>
      <h6>Joined: {joined}</h6>
      <button style={contactStyle}>Contact</button>
    </div>
  )
}

function Customers(){
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => setCustomers(data))
  });
  return(
    <div>
      <h3>Customers:</h3>
      <ul>
        {
          customers.map(c => <li>{c.name}</li>)
        }
      </ul>
    </div>
  )
}
function ShowProducts(props){
  const makeUp={
    color: "rgb(98, 218, 253)",
    backgroundColor: 'black',
    margin: '10px',
    padding: '5px',
    border: '2px solid gold',
    borderRadius: '10px',
  }
  const buyNowBtn = {
    backgroundColor: 'gold',
    border: 'none',
    borderRadius: '5px',
    height: '30px',
    margin: '5px',
    padding: '5px',
  }
  const {name, price} = props.product;
  return (
    <div style={makeUp}>
      <h4>{name}</h4>
      <p>Price: {price}</p>
      <button style={buyNowBtn}>Add to cart</button>
      <button style={buyNowBtn}>Buy now</button>
    </div>
  );
}

export default App;