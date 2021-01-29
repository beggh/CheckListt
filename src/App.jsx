import React,{useState} from "react";
import ToDolist from'./ToDolist';
import "./index.css";
const App=() =>{
  
      const [inputList, setinputList] = useState("");
      const [Items,setItems]=useState([]);
      const itemEvent=(event)=>{
        setinputList(event.target.value); 
      }
      const listofItems=()=>{
        setItems((olditems)=>{
            return [...olditems,inputList];
        });
        setinputList("");

      };
      const deleteItems=(id)=>
    {
        console.log("deleted");
        setItems((olditems)=>{
          return olditems.filter((arrElem,index)=>{
              return index!==id;
          });
        });
    };

  return(
    
    <div> className="main_div" 
    <div> className="center_div"
      <br/>
      <h1> CheckList</h1>
      <br/>
      <input type="text" placeholder="Add items" onChange={itemEvent}
      value={inputList}/>
      <button onClick={listofItems}>+</button>
      <ol>
     {
       Items.map((itemval,index)=>{
         return (
           <ToDolist 
           key={index}
           id={index}
           text={itemval}
           onSelect={deleteItems}/>
         )
       }
       )
     }
      </ol>
      
    </div>
    </div>
  )
}

export default App;
