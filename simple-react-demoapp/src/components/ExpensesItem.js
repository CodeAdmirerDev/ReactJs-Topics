import './Expenseitem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseTitle from './ExpenseTitle';

function ExpenseItem (props){
    return (       
        <div className='expense-item'>
            <ExpenseDate date={props.date}/>   
            <ExpenseTitle title={props.title}/>        
            {/* <div className='expense-item__date'>Date: {props.date.toLocaleString('en-US', {month:'long'})}</div> */}
            {/* <div className='expense-item__description'><h2>Title: {props.title}</h2></div> */}
            <div className='expense-item__price'>Event budget :  ₹ {props.price}</div>
        </div>   
   );
}
 export default ExpenseItem;