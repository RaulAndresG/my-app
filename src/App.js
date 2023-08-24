import ExpenseItem from "./components/ExpenseItem.js";

function App() {

const expenses = [
  {id:'e1',title:'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28) },
  {id:'e2',title:'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28) },
  {id:'e3',title:'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28) },
  {id:'e4',title:'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28) },

]
  /*   const para = document.createElement('p')
  para.textContent = 'This is also visible'
  document.getElementById('root').append(para) */
  return (
    <div>
    <h1>  leart React</h1> 
    <ExpenseItem></ExpenseItem>
    <ExpenseItem></ExpenseItem>
    <ExpenseItem></ExpenseItem>
    <ExpenseItem></ExpenseItem>
 
    </div>
  );
}

export default App;
