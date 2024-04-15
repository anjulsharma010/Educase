import { Link } from "react-router-dom";

const Home = () => {

  return (
    <div className="container">
    <div className="home">
      <div className="header"><h2>Welcome to Popx</h2></div>
      <div className="content"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div>
      <div className="btn1"><Link to="/signup"><button className="signup-btn"><span>Create Account</span></button></Link></div>
      <div className="btn2"><Link to="/login"><button className="login-btn"><span>Already Registered?Login</span></button></Link></div>
    </div>
    </div>
  );
};


export default Home;
