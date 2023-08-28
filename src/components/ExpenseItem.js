/* import ExpenseDate from './ExpenseDate'; */
import'./ExpenseItem.css';
function ExpenseItem(props) {





    return (
    <div className='todo' > 
    <div className='expense-item' >
        <div className='expense-item__description' >
            <h2>{props.title}</h2>
            <div> <img src={props.img}></img></div>
            <div className='expense-item__price'>${props.amount} </div>
        </div>
        
    </div>
    </div>
        );
}

export default ExpenseItem;