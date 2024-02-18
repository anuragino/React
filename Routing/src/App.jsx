import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'


import Header from './componets/header'
import About from './componets/about'
import Products from './componets/products'
import Services from './componets/service'
import Home from './componets/home'

import Refdemo from './componets/Refdemo'


// internalRouting files for ABout
import Hand from './componets/About/hand'
import Blow from './componets/About/blow'
import Facial from './componets/About/facial'
import Sixty from './componets/About/sixty9'



function App() {

  return (
    <>
      {/* <Refdemo/> */}

      <BrowserRouter>
        
        <Header/>

        <Routes>

          <Route path='/' element={<Home/>}/>

          {/* // Internal Routing */}
          <Route path='/about' element={<About/>}>
            <Route path='hand' element={<Hand/>}/>
            <Route path='blow' element={<Blow/>}/>
            <Route path='facial' element={<Facial/>}/>
            <Route path='sixty9' element={<Sixty/>}/>
          </Route>

          <Route path='/products' element={<Products/>}/>
          <Route path='/service' element={<Services/>}/>
          

        </Routes>
      </BrowserRouter>
     
      
    </> 
  )
}

export default App
