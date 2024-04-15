import ellipse from "../assets/img/ellipse.png";
import camera from "../assets/img/camera.png";
const Account = () => {
  return (
    <div className="login-container">
      <div className="upper"><h3>Account Settings</h3></div>
      <div className="lower">
        <img className="ellipse" src={ellipse} alt="not" />
        <img className="camera" src={camera} alt="not" />
        <h3>Marry Doe</h3>
        <h4>Marry@Gmail.Com</h4>
        <p>Lorem ipsum dolor sit amet consectetur redgd adipisicing elit. Laborum distinctio cupiditate ane adipisci quam facilis amet, dolorem veniam nobis omnis nihil aspernatur velit ipsam!</p>
      </div>
    </div>
  );
};

export default Account;
