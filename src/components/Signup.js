import { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("Anjul Sharma");
  const [number, setNumber] = useState("1234567897");
  const [email, setEmail] = useState("anjulsharma010@gmail.com");
  const [password, setPassword] = useState("122@kas");
  const [check, setCheck] = useState();

  return (
    <div className="container">
      <div className="home">
        <h2>Create your PopX account</h2>
        <form action="#" id="register" method="post">
          <div className="input">
            <input
              type="text"
              name="fname"
              id="fname"
              autoComplete="full-name"
              value={name}
              required
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <label className="label1">Full Name</label>
          </div>
          <div className="phone">
            <input
              type="text"
              name="phone"
              id="phone"
              autoComplete="full-name"
              value={number}
              required
              onChange={(e) => {
                setNumber(e.target.value);
              }}
            />
            <label className="label2">Phone Number</label>
          </div>

          <div className="email">
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              value={email}
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <label className="label3">Email</label>
          </div>

          <div className="email">
            <input
              type="password"
              name="password"
              id="password"
              autoComplete="new-password"
              value={password}
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <label className="label3">Password</label>
          </div>
          <div className="radio">
            <label className="radio-h">Are you an agency?</label>
            <input
              type="radio"
              id="yes"
              name="agency"
              value="yes"
              checked
              autoComplete="yes"
            />
            <label className="yes">Yes</label>
            <input
              type="radio"
              id="no"
              name="agency"
              value="no"
              autoComplete="no"
            />
            <label className="no">No</label>
          </div>
          <div className="signup-btn1">
            <Link to="/signup/account">
              <button className="signup-btn1-2">
                <span>Create Account</span>
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
