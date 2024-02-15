import { useState } from 'react'
import './App.css'
import Products from './products'

function App() {
  let [show,setShow] = useState(false);

  return (
    <div className='main'>
      <h1>All Products</h1>

      <button onClick={()=>{
        setShow(true);
      }}>Show</button>

    <button onClick={()=>{
        setShow(false);
      }}>Hide</button>

      {
        show===true?
        (<Products/>):
        ( <h1>Products not avilable!!</h1> )
      }

      
    </div>
  )
}

export default App
