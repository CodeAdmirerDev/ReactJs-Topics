import React,{useState} from "react";
import { createRoot } from "react-dom/client";

function Counter (){
    const [count,setCount] = useState[0];

    const increment = () => {
       setCount(count+1);
    }

    const decrement = () => {
        setCount(count-1);  
    }
    return(
        <div>
            <h1>Counter:{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>decrement</button>
        </div>
    )
}
const root1 = ReactDOM.createRoot(document.getElementById("root1"));
root1.render(<Counter/>);