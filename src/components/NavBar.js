import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return <div>
        <nav className='nav'>
       
        <ul>
           <li>
              <Link to="/home">Home</Link>  
            </li>
            <li>
                <Link to="/movies">Movies</Link>
                
            </li>
            <li>
                <Link to="/directors">Directors</Link>
            </li>
            <li>
                <Link to="/actors">Actors</Link>
            </li>
        </ul>
    </nav>
  </div>;
}

export default NavBar;
