import { useState } from "react"

function CompState(){
    let [animal,setAnimal] = useState(["Lion","Elephant","Hyen"]);
    let [name,setName] = useState("Anurag");

    function changeName(){
        setName((val)=>{
            return val+" Kumar";
        })
    }

    // spread [..add] operator make deep copy of the array i.e. copy only value not address
    function addAnimal(){
        setAnimal((prevAnimal)=>{
            return [...prevAnimal,"Deer"];
        })
    }

    return(
        <div>
            <h1>{name}</h1>
            <button onClick={changeName}>Complete Name</button>

            {
                animal.map((name,idx)=>{
                    return(
                        <h1 key={idx}>{name}</h1>
                    )
                })
            }

            <button onClick={addAnimal}>Add Animal</button>

        </div>
    )
}

export default CompState;