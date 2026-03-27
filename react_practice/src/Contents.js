import React from 'react'
import { useState } from 'react';

const Contents = () => {
    function handleNameChange() {
    const names = ["Earn", "Grow", "Give"];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  }
  // const handleClick =(e) =>{
  //   console.log(e.target)
  // }
  // const handleClick2 =(name) =>{
  //   console.log(`she is more beautiful said by ${name}`)
  // }
  const [count,setCount] = useState(99);

  function incrementFunction(){
      setCount((count)=>{return count +1})
  }

  function decrementFunction(){
      setCount((count)=>{return count -1})
  }

  

  return (
    // <main>
    // <p onClick={() => handleClick2("ram")}> Lets {handleNameChange()} Money</p>
    // <button onClick={(e) => handleClick(e)}> Keerthi</button>
    // </main>

    <main>
      <p>Lets Earn Money</p>
      <button> Keerthi </button>
      <button onClick={decrementFunction}>-</button>
      <span>{count}</span>
      <button onClick={incrementFunction}>+</button>

    </main>
  )
}

export default Contents