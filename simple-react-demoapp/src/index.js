import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import Car from './Classcomp';
import reportWebVitals from './reportWebVitals';

// function Sample() {
//   return (
//       <div className="App">
//       <h1>Welcome to sample React App</h1>
//       </div>
//   );
// }
// function Myform(){

//    // Step 1: Set up state to manage the input value
//    const [inputValue, setInputValue] = useState('');

//    // Step 2: Handle input changes
//    const handleInputChange = (event) => {
//     alert(event.target.value);
//      setInputValue(event.target.value);
//    };
 
//    // Step 3: Handle button click to read the input value
//    const handleButtonClick = () => {
//      alert(`Input value is: ${inputValue}`);
//    };

// return (
// <div>
//   <h1>Want to learn React JS?</h1>
//   <input type='text' id="userinputId"  value={inputValue}
//         onChange={handleInputChange} ></input><br/>
//   <button onClick={handleButtonClick} >Confirm?</button>
// </div>
// );
// }
const root1 = ReactDOM.createRoot(document.getElementById('root1'));
// const root = ReactDOM.createRoot(document.getElementById('root'));
// const root2 = ReactDOM.createRoot(document.getElementById('root2'));
//const root3 = ReactDOM.createRoot(document.getElementById('cls'));

root1.render(<App />);
// root.render(<Sample />);
// root2.render(<Myform />);
//root3.render(<Car/>);

reportWebVitals();
