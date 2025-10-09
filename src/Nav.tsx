import { NavLink } from "react-router";

export function Nav() {

  return (
    <nav>
      <NavLink to="/" end>Home</NavLink> 
      <NavLink to="/player">Music Player</NavLink>
      <NavLink to="/video">Videos</NavLink>
      <NavLink to="/editor">Settings</NavLink>
    </nav>
  );
}