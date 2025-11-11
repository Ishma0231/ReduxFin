
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, selectAuthStatus, selectAuthError } from "../Authorisation/Authslice1.js"
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const status = useSelector(selectAuthStatus);
  const error = useSelector(selectAuthError);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ username, password }));
  };

  return (
    <div className="container mt-4 ">
        <div className="d-flex flex-column justify-content-center align-items-center">
      <h2 className="mb-3 text-center" style={{color:"black"}}>Login</h2>

      <form onSubmit={handleSubmit} className="d-flex flex-column gap-2 card p-4" style={{ maxWidth: "300px",backgroundColor: "rgba(33, 37, 41, 0.9)" }}>
        <input type="text"  placeholder="Username"  value={username} onChange={(e) => setUsername(e.target.value)}
 className="form-control"/>

        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}
          className="form-control"/>
        <button type="submit" className="btn btn-warning"  disabled={status === "loading"||status==="succeeded"}>
          {status === "loading" ? "Logging in..." : "Login"}
        </button>
      </form>
        
   
      {status === "failed" && (
        <p className="text-danger mt-2">{error}</p>
      )}

      {status === "succeeded" && (
        <div className="mt-3">
          <p className="text-success fw-bold"> Login successful!</p>
        </div>
      )}
      <button className="btn btn-outline-success mt-3" onClick={() => navigate("/")}>
            Go to Home
          </button>
          <div className="mt-3 p-2 text-center rounded-3" style={{backgroundColor: "rgba(255, 255, 255, 0.7)",
            color: "#333",fontSize: "0.9rem", width: "fit-content"}}>
        <p className="mb-1 fw-semibold"> Test With:</p>
        <p className="mb-0">Username: <code>mor_2314</code></p>
        <p className="mb-0">Password: <code>83r5^_</code></p>
      </div>
      </div>
    </div>
  );
}
