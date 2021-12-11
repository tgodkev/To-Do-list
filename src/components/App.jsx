import React, {useState} from "react";

function App() {

const [item, setItem] = useState("");
const [newItem, setNewItem] = useState([]);

  function handleChange(event){
    const newValue = event.target.value;
    setItem(newValue);
  }


  function handleClick(){
    setNewItem( (prevItem) => {
      return [...prevItem, item];
    });

    setItem("");
  }



  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text"
        value={item}
        onChange={handleChange}
         />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
         {newItem.map((toDoItem) => {
           return <li>{toDoItem}</li>
         })}
        </ul>
      </div>
    </div>
  );
}

export default App;
