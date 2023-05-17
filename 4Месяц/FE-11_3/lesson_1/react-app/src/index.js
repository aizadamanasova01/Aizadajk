import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
let root = document.getElementById('root');


const Killer = () => {
  const[count, setCount] = useState(40);
  const[text, setText] = useState("lorem");
  const[nuLL, setNuLL] = useState(null);
  const[isAdmin, setIsAdmin] = useState(false);

  const inc = () => {
    setCount(prevSt => prevSt + 1);
  };
  const dec = () => {
    setCount(prevSt => prevSt - 1);
  };
  const res = () => {
    setCount(0);
  };
  //shift + alt + f
   
  return(
    <div>
        <h1>{count}</h1>
        <button>-1</button>
        <button>reset</button>
    </div>
  );
};
ReactDOM.createRoot(root).render(<Killer/>)