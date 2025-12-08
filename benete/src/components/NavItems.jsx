import { NavLink } from "react-router-dom";

function NavItem({ to, label, exact }) {
  return (
    <NavLink
      to={to}
      end={exact} 
      className={({ isActive }) =>
        isActive ? "nav-link active" : "nav-link"
      }
    >
      {label}
    </NavLink>
  );
}

export default NavItem;

