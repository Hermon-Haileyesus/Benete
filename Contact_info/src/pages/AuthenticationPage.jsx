import "../css/AuthenticationPage.css";
import { useState } from "react";
import { Eye, EyeOff, LogIn, User, Lock } from "lucide-react";

function Authentication() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login delay
    setTimeout(() => {
      setIsLoading(false);
      alert("Login attempted — connect backend here!");
    }, 1500);
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