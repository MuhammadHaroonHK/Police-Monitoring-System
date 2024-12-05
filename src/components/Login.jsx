import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent default form submission
    navigate("/home"); // Navigate directly to Dashboard (home)
  };

  return (
    <div className="logpage">
      <div className="shadow-lg rounded-4 border-0 log_content">
        <form className="row g-3" onSubmit={handleLogin}>
          <div className="col-md-12">
            <label htmlFor="inputEmail3" className="form-label">
              ID No.
            </label>
            <input
              type="text"
              className="form-control"
              id="inputEmail3"
              placeholder="Registration number"
              aria-label="Registration number"
            />
          </div>
          <div className="row g-3">
            <div className="col-md-12">
              <label htmlFor="inputPassword5" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="inputPassword5"
                placeholder="Password"
                aria-label="Password"
              />
            </div>
          </div>
          <div className="col-12">
            <p className="text-center">
              Don't have an account? <Link to="/register">Register</Link>
            </p>
            <div className="d-grid gap-2 mx-auto w-25">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
