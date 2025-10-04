import { NavLink } from "react-router";

export function Nav() {

  return (
    <nav>
      <NavLink to="/" end>Home</NavLink> 
      <NavLink to="/list" >List</NavLink>
      <NavLink to="/player">Player</NavLink>
      <NavLink to="/editor">Editor</NavLink>
    </nav>
  );
}