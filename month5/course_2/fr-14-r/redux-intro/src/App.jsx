import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import { incAction } from './store';
/*
useSelector  бул сторду алып берет
useDispatch  бул сторго салып берет

 */


const App = () => {
  const count = useSelector(store => store.count);

  console.log(count);

   const dispatch = useDispatch();

  const incrementCount = () => {
    //dispatch({type:"IMC"});
    dispatch(incAction());
  };

  const decCount = () => {
    dispatch({type:"DEC"});
  }; 

  const resCount = () => {
    dispatch({type:"RES"});
  }; 
  return (
  <div>
    Counter App whith Redux
    <h3>Count: {count}</h3>
    <button onClick={incrementCount}> +1</button>
    <button onClick={decCount}> -1</button>
    <button onClick={resCount}>reset</button>

  </div>
  );
  };

export default App