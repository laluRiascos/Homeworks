import {useState} from "react"

//const value = 0;

const Buttons = ({value = 0}) => {

    const [counter, setCounter] = useState(value)
    const handleAdd = () =>{
      setCounter(counter + 1)
      console.log(counter)
    }
    const handleMinus = () =>{
      setCounter(counter - 1)
      console.log(counter)
    }
    const handleReset = () =>{
      setCounter(value)
      console.log(counter)
    }
      return (
        <>
        <h1> Counter </h1>
        <span> {counter} </span>
        <button onClick={ () => handleAdd()}> +1 </button>
        <button onClick={() => handleMinus()}> -1 </button>
        <button onClick={() => handleReset()}> Reset </button>
        </>
      ) 
    }
  
export default Buttons;