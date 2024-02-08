import { useState } from "react";

function User(){
    // let name = "Preet";  interal var
    let [name,setName] = useState("Preet");
    console.log(name);

    function changeName(){
        // name = "Reet"
        setName("Reet");
        console.log(name);
    }

    function Dosmthg(planet){
        console.log("hello"+planet);
    }

    return(
        <div className="user">
            <h2>{name}</h2>
            <button onClick={changeName}>Click Me!!</button>

            {/* with parameter use bind or anomyus function */}
            {/* <button onClick={Dosmthg.bind(this,"mars")}>do Smthg</button> */}
            <button onClick={()=>{
                Dosmthg("mars")
            }}>do Smthg</button>
            
        </div>
    )
}

export default User;