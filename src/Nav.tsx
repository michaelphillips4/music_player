import { NavLink } from "react-router";

export function Nav() {

  return (
    <nav>
         <b><NavLink to="/"  end>Home</NavLink> </b>  
          <b><NavLink to="/list" >List</NavLink> </b>
          <b><NavLink to="/player">Player</NavLink> </b> 
           <b><NavLink to="/editor">Editor</NavLink> </b> 
    </nav>
  );
}