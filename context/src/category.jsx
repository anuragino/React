import { TheContext } from "./App"
import { useContext } from "react"

export default function Category(){
    let u = useContext(TheContext)
    return (
        <div className="cat"> 
            <p>Category comp {u.userName} {u.token}</p>
            <button onClick={()=>{
                u.setUsername("Thor")
            }}>
                change name
            </button>
        </div>
    )
}