import { NavLink } from "react-router-dom";

function SideNavbar() {
  return (
    <nav>
          <ul>
            <li>
              <NavLink to="/">
                Today
              </NavLink>
            </li>
            <li>
              <NavLink to="/tasks">
                Tasks
              </NavLink>
            </li>
            <li>
              <NavLink to="/important">
                Important
              </NavLink>
            </li>
            <li>
              <NavLink to="/completed">
                Completed
              </NavLink>
            </li>
   
            <li>
              <NavLink to="/due">
                Due
              </NavLink>
            </li>
          </ul>
       
    </nav>
  );
}

export default SideNavbar;
