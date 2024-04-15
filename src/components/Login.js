import { Link } from "react-router-dom";
const Login = () => {
  return (
    <>
    <div className="login-container">
      <div className="apply_box">
        <h2 className="signup-h2">
          Signup your
          <br />
          PopX account
        </h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <form action="" id="register">
          <div className="email" id="loginemail">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Email"
              required
            />
            <label className="label-login-email">Email Address</label>
          </div>

          <div className="email" id="loginpass">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
              required
            />
            <label className="label-login-pass">Password</label>
          </div>
          <div className="login-btn1">
            <Link to="/login/account">
              <button className="login-btn1-2"><span>Login</span></button>
            </Link>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};


export default Login;


