import { useState } from 'react'
import CompState from './compState'
import './App.css'

function App() {

    let[details,setDetails]=useState({
      name:"",
      email:"",
      dob:""
    })

    function handleInput(event){
        setDetails((prevObj)=>{
          return {...prevObj,[event.target.name]:event.target.value}
        })
    }
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit() {
        setSubmitted(true); 
    }

    return (
        <>
            {/* <CompState/> */}
            <div className='form'>
              <h1 className='heading'> Registration Form</h1>
                <h2>Name</h2>
                <input type="text" onChange={handleInput} name='name'  placeholder='Enter Your Name' value={details.name}/>
                <h2>Email</h2>
                <input type="email" onChange={handleInput} name="email"  placeholder='Enter E-mail' value={details.email}/>
                <h2>DOB</h2>
                <input type='date' onChange={handleInput} name="dob"  placeholder='Enter DOB' value={details.dob}/>
                <button onClick={handleSubmit}>Submit</button>
            
                {submitted && (
                    <div className='backend'>
                        <h1 className='heading rev'>Backend of the Form</h1>
                        <h2>Name : {details.name}</h2>
                        <h2>Email : {details.email}</h2>
                        <h2>DOB : {details.dob}</h2>
                    </div>
                )}
            </div>
            
            
        </>
    )
}

export default App
