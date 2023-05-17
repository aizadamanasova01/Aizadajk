import React from 'react';
import { createRoot } from 'react-dom/client';
//!Компоненты (JSX,JS)
const Header = () =>{
  return <h1>Header</h1>
};
//!Компоненты (JSX,JS,CSS?)
function Content(){
  return <h1 style={{height: "800px", background: "green"}}>Content</h1>
}

const Footer =()=>{
  return (
    <div>
  <h2>Footer</h2>
   <ul>
    <li>About</li>
    <li>Contacts</li>
    </ul>
  </div>
  );
};

const App =()=>{
  return(
    <div>
      <Header/>
      <Content/>
      <Footer/>  
    </div>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<App/> );

