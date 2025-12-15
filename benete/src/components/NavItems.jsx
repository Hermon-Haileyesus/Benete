import { NavLink } from "react-router-dom";

function NavItem({ to, label, exact, onClick }) {
  return (
    <NavLink
      to={to}
      end={exact} 
      className={({ isActive }) =>
        isActive ? "nav-link active" : "nav-link"
      }
      onClick={onClick} 
    >
      {label}
    </NavLink>
  );
}

export default NavItem;

