import Account from "../assets/image/account_balance.png";
import Bank from "../assets/image/transfer_within_a_station.png";
import Sell from "../assets/image/verified_user.png";
const Section3 = () => {
  return (
    <div className="sec3_container container">
      <h1>HOW IT WORKS</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry
      </p>
      <div className="main4_cont">
        <div className="works">
          <img src={Sell} alt="" />
          <h1>CREATE AN ACCOUNT</h1>
        </div>
        <div className="works">
          <img src={Account} alt="" />
          <h1>Link your bank account</h1>
        </div>
        <div className="works">
          <img src={Bank} alt="" />
          <h1>Start buying & selling</h1>
        </div>
      </div>
    </div>
  );
};
export default Section3;
