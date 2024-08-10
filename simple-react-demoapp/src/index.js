import React , { useState }from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function Sample() {
  return (
      <div className="App">
      <h1>Welcome to sample React App</h1>
      </div>
  );
}
function Myform(){

   // Step 1: Set up state to manage the input value
   const [inputValue, setInputValue] = useState('');

   // Step 2: Handle input changes
   const handleInputChange = (event) => {
     setInputValue(event.target.value);
   };
 
   // Step 3: Handle button click to read the input value
   const handleButtonClick = () => {
     alert(`Input value is: ${inputValue}`);
   };

return (
<div>
  <h1>Want to learn React JS?</h1>
  <input type='text' id="userinputId"  value={inputValue}
        onChange={handleInputChange} ></input><br/>
  <button onClick={handleButtonClick} >Confirm?</button>
</div>
);
}
const root = ReactDOM.createRoot(document.getElementById('root'));
const root1 = ReactDOM.createRoot(document.getElementById('root1'));
const root2 = ReactDOM.createRoot(document.getElementById('root2'));

root.render(
    <Sample />
);
root1.render(
    <App />
);
root2.render(
  <Myform />
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
