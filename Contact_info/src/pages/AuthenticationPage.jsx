import "../css/AuthenticationPage.css";
import { useState } from "react";
import { Eye, EyeOff, LogIn, User, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
function Authentication() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();



  const handleSubmit =async (e) => {
    e.preventDefault();
    setIsLoading(true);
     try {
      const response = await fetch("/api/admin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        navigate("/contact-list");
      } else {
        alert(data.error || "Login failed");
      }
    } catch (err) {
      alert("Server error: " + err.message);
    }



    // Simulate login delay
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section className="auth-section">
      <div className="auth-card">
        {/* Header */}
        <div className="auth-header">
          <h2 className="auth-title">Welcome Back</h2>
          <p className="auth-subtitle">
            Please enter your username and password to continue.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="auth-form">
          {/* Username */}
          <div className="formContent">
            <label htmlFor="username">Username</label>
            <div className="inputContent">
              <User className="input-icon" />
              <input
                id="username"
                type="text"
                placeholder="Enter your username"
                disabled={isLoading}
                value={username}
                onChange={(e) => setUsername(e.target.value)}

              />
            </div>
          </div>

          {/* Password */}
          <div className="formContent">
            <label htmlFor="password">Password</label>
            <div className="inputContent">
              <Lock className="input-icon" />
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                disabled={isLoading}
                value={password}
                onChange={(e) => setPassword(e.target.value)}

              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
                tabIndex={-1}
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="submit-btn"
            disabled={isLoading}
          >
            <div className="btn-content">
                {isLoading ? (
              <>
                <div className="spinner" />
                <span>Signing in...</span>
              </>
              ) : (
              <>
                <LogIn className="btn-icon" />
                <span>Sign In</span>
              </>
               )}
            </div>
            
          </button>
        </form>
      </div>
    </section>
  );
}

export default Authentication;