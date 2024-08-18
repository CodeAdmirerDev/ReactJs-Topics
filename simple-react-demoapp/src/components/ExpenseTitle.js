import "./ExpenseTitle.css";

function ExpenseTitle(props){
    return (
        <div className="expense-item__description">
            <h2 className="expense-item-h2">Title: {props.title}</h2>
        </div>
    );
}
export default ExpenseTitle;