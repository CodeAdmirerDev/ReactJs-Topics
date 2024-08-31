import React, { useState } from "react";
import "./App.css";
import ExpenseItem from './components/ExpensesItem';
import NewExpense from "./components/NewExpense";

function App (){
  const expenses =[
    {title: "My birthday", price: 25000, date: new Date(1995,0,20)},
    {title: "Hubby birthday", price: 75000, date: new Date(1994,11,5)},
    {title: "My Marriage day", price: 50000, date: new Date(2024, 7, 17)}
  ];
  //const App1 = () => {
  const [expenses1, setExpenses] = useState(expenses);
  const addExpenseHandler = (expense) => {
  setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
};
  return (
      <div className="App">
      <h1 className="clsMainHead">Event Budget planner</h1>
      <h2>Adding form</h2>
      <NewExpense onAddExpense={addExpenseHandler}/>  
      {/* <App expenses = {expenses1}  />  */}
        {/* <ExpenseItem
          title={expenses1.title}
          amount={expenses1.amount}
          date={expenses1.date}
        />  */}    
      <ExpenseItem
         title = {expenses[0].title}
         price = {expenses[0].price}
         date = {expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
         title = {expenses[1].title}
         price = {expenses[1].price}
         date = {expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
         title = {expenses[2].title}
         price = {expenses[2].price}
         date = {expenses[2].date}
      ></ExpenseItem> 
      </div>
  );
};
//};
export default App;
