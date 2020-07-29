import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

const products = [
  {name: 'DELL 19" monitor', price: 'BDT.13,500'},
  {name: 'HP 19.5" monitor', price: 'BDT.6,500'},
  {name: 'A4Tech Keyboard', price: 'BDT.780'},
  {name: 'Gamdias motherboard', price: 'BDT.6600'},
  {name: 'MaxGreen casing', price: 'BDT.2200'},
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Count></Count>
          <ul>
            {
              products.map(pd=><ShowProducts product={pd}></ShowProducts>)
            }
          </ul>
      </header>
    </div>
  );
}

function ShowProducts(props){
  const makeUp={
    color: 'cyan',
    backgroundColor: 'black',
    margin: '10px',
    padding: '5px',
    border: '2px solid blue',
    borderRadius: '10px',
  }
  const buyNowBtn = {
    backgroundColor: 'gold',
    border: 'none',
    borderRadius: '5px',
    height: '30px',
  }
  const {name, price} = props.product;
  return (
    <div style={makeUp}>
      <h4>{name}</h4>
      <p>Price: {price}</p>
      <button style={buyNowBtn}>Buy now</button>
    </div>
  );
}

function Count(){
  const BtnStyle = {
    color: 'gold',
    backgroundColor: 'blue',
    border: 'none',
    borderRadius: '2px',
    padding: '5px',
    margin: '5px',
  }
  const [count, setCount] = useState(0);
  const addHandler = () => {
    const newCount = count + 1;
    setCount(newCount);
  }
  const reduceHandler = () => {
    if(count>0){
      const newCount = count - 1;
      setCount(newCount);
    }
  }
  const resetHandler = () => {
    setCount(0);
  }
  return(
    <span>
      <h1>Count: {count}</h1>
      <button style={BtnStyle} onClick={addHandler}>Add</button>
      <button style={BtnStyle} onClick={reduceHandler}>Reduce</button> 
      <button style={BtnStyle} onClick={resetHandler}>Reset</button>
    </span>
  );
}

export default App;
