import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";
import '../css/NavBar.css'

export default function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    if (!window.confirm("Are you sure you want to logout?")) return;
    localStorage.removeItem("token"); 
    navigate("/", { replace: true }); 
  };

  return (
    <button
      onClick={handleLogout}
      className="log-out"
    >
        <div className="log-outcontent">
            <span>Logout</span> 
            <LogOut className="log-outIcon"/>
        </div>
     
    </button>
  );
}