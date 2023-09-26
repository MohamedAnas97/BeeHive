import Logo from "../assets/image/logo1.png";
import Hum from "../assets/image/hamburger.png";
import { Link } from "react-router-dom";

const Mainpage = () => {
  return (
    <>
      <div className="main_container">
        <div className="navbar container">
          <div className="logo">
            <img src={Logo} alt=""></img>
          </div>
          <div className="links">
            <ul>
              <li><Link to="/apply" style={{textDecoration:"none",color: "rgba(75, 85, 99)"}} >Apply Here!</Link></li>
            </ul>
          </div>
          <div className="humber">
            <img src={Hum} alt=""/>
          </div>
        </div>
        <div className="main_content container ">
          <div className="main1">
            <h1>LEARN TO TRADE ONLINE AND SHARE IN THE PROFITS!</h1>
            <p>
              We've helped over 3000 new traders make as musch as $1000 or more
              per month... Will you be next?
            </p>
            <a href="-">Apply Here</a>
          </div>
        </div>
        <div className="main2">
          <h1>CHAT BOT</h1>
        </div>
      </div>
    </>
  );
};
export default Mainpage;
