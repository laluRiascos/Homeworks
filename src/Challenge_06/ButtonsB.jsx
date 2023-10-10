import useCounter from "./useCounter"
import {useState} from "react"

const ButtonsB = () => {
  
  const {counter, increment, decrement, reset } = useCounter(0)

      return (
        <>
        <h1> Counter </h1>
        <span> {counter} </span>
        <button onClick={ () => increment()}> +1 </button>
        <button onClick={() => decrement()}> -1 </button>
        <button onClick={() => reset()}> Reset </button>
        </>
      ) 
    }
  
export default ButtonsB;