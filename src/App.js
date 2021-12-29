
import logo from './logo.svg';
import './App.css';
import Clock from './components/Clock';
import Title from './components/Title';
import ToDo from './components/ToDo';
import { useState } from 'react';





function App() {
  const [show,setShow]=useState()

  return <div>
     {show? <Clock/>:''}
     <button onClick={()=>setShow(!show)}>jjj</button>
      
      <Title/>
      <ToDo/>
      
    </div>
}

export default App;
