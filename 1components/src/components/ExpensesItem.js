import React,{useState} from 'react';
import './Expenseitem.css';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) => {
    const [title, setTitle]= useState(props.title);
    console.log('Expenses is called');

    const clickHandler = ()=>{
        setTitle('Updated title'); //setTitle method called
        console.log(title);
    };

    return (           
        <div className='expense-item'>
            <ExpenseDate date={props.date}/>   
            {/* <div className='expense-item__date'>Date: {props.date.toLocaleString('en-US', {month:'long'})}</div> */}
            <div className='expense-item__description'><h2>Title: {title}</h2></div>
            <div className='expense-item__price'>Event budget :  ₹ {props.price}</div>
            <button onClick={clickHandler}>Change the title</button>
        </div>   
   );
}
 export default ExpenseItem;