import { useState,createContext } from 'react'
import './App.css'
import Product from './product';
import Demo from './demo';


// create context
export const TheContext = createContext();

function App() {
  let[userName,setUsername] = useState("Anurag");
  let[token,setToken] = useState("ajwaen");
  
  return (
    <>
      <TheContext.Provider value={{userName,token,setUsername}}>
        <h1>App Component {userName}</h1>
        <Product/>

        <Demo name="Ironman"/>

      </TheContext.Provider>
      
    </>
  )
}

export default App
