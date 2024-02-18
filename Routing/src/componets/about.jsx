import { Link,Outlet } from "react-router-dom"

function About(){
    return(
        <div className="about">
            <h1>About Us</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis tempora nulla officiis sint similique natus omnis incidunt recusandae. Natus, odit accusantium quo ex laboriosam magni itaque fuga corrupti eveniet obcaecati.</p>

            <div className="jobs">
                <ul >
                    <li >
                        <Link className="job" to='/About/hand'>Hand Job</Link>
                    </li>
                    <li >
                        <Link className="job" to='/About/blow'>Blow Job</Link>
                    </li >
                    <li >
                        <Link className="job" to='/About/facial'>Facial Job</Link>
                    </li>
                    <li>
                        <Link className="job" to='/About/sixty9'>Sixty Nine</Link>
                    </li>
                </ul>
            </div>
            

            <Outlet/>
        </div>

        
        
    )
}

export default About