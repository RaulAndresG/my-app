import ExpenseItem from "./components/ExpenseItem.js"; 
import tshirt from "./img/tshirt.jpg" 
import wallet from "./img/wallet.jpg"
import Cup from "./img/cup.jpg"
import compu from "./img/compu.jpg"




function App() {

const expenses = [
  {
    id:'e1',
  title:'T-Shirt', 
  amount: 74.12,
  img:tshirt,   
},
  {
    id:'e2',
  title:'Wallet',
   amount: 56.4,
  img: wallet,   
   },
  {
    id:'e3',
  title:'Cup',
   amount: 2.67,
    img:Cup,
  },
  {
    id:'e4',
  title:'Computer', 
  amount: 294.67,
  img:compu,

  
   },

]
  /*   const para = document.createElement('p')
  para.textContent = 'This is also visible'
  document.getElementById('root').append(para) */
  return (
    <div>
    <h1>  leart React</h1> 
    <ExpenseItem
     title = {expenses[0].title}
      amount={expenses[0].amount}
       date={expenses[0].date}
       img={expenses[0].img}

        ></ExpenseItem>
    <ExpenseItem 
    title = {expenses[1].title} 
     amount={expenses[1].amount}
      date={expenses[1].date}
      img={expenses[1].img}

       ></ExpenseItem>
          <ExpenseItem 
    title = {expenses[2].title} 
     amount={expenses[2].amount}
      date={expenses[2].date}
      img={expenses[2].img}

       ></ExpenseItem>   <ExpenseItem 
       title = {expenses[3].title} 
        amount={expenses[3].amount}
         date={expenses[3].date}
         img={expenses[3].img}
   
          ></ExpenseItem> {/*   <ExpenseItem 
          title = {expenses[4].title} 
           amount={expenses[4].amount}
            date={expenses[4].date}
            img={expenses[4].img}
      
             ></ExpenseItem> */}

    </div>
  );
}

export default App;
