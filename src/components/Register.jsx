import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault(); // Prevent default form submission
    navigate("/home"); // Navigate directly to Dashboard (home)
  };

  return (
    <div className="regpage">
      <div className="shadow-lg rounded-4 border-0 reg_content">
        <form className="row g-3" onSubmit={handleRegister}>
          <div className="col-md-6">
            <label htmlFor="" className="form-label">
              First name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              aria-label="First name"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="" className="form-label">
              Last name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              aria-label="Last name"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="" className="form-label">
              ID No.
            </label>
            <input
              type="text"
              className="form-control"
              id="inputEmail1"
              placeholder="Registration number"
              aria-label="Registration number"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="inputEmail2"
              placeholder="Enter email"
              aria-label="Enter email"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="" className="form-label">
              Set Password
            </label>
            <input
              type="password"
              className="form-control"
              id="inputPassword4"
              placeholder="Set password"
              aria-label="Set password"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="inputPassword"
              placeholder="Confirm password"
              aria-label="Confirm password"
            />
          </div>
          <div className="col-12">
            <p className="text-center">
              Already have an account? <Link to="/login">Login</Link>
            </p>
            <div className="d-grid gap-2 col-2 mx-auto">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
