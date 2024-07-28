import { useState } from "react";


const Counter = () => {

let [count, setCount]= useState(15);

  const handleAdd=()=>{
    count=count+1;
    setCount(count);
    
  }

  const handeleRemove=()=>{
    count=count-1;
    setCount(count);
  }
   
  return (
   <>
    <div>
      <h1> Items : {count}</h1>
    </div>
    <button onClick={handleAdd}>Add Items</button>
    <button onClick={handeleRemove}>Remove Items</button>
   </>
  )
}

export default Counter
