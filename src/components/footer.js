import Logo from "../assets/image/logo-light1.png";
const Footer = () => {
  return (
    <div className="foot_container">
      <div className="main_foot container">
        <div className="footlink">
          <img src={Logo} alt="" />
        </div>
        <div className="footlink">
          <ul>
            <li>
              <span>Links</span>
            </li>
            <li>Product Tour</li>
            <li>Pricing</li>
            <li>Founding Members</li>
            <li>Case Studies</li>
          </ul>
        </div>
        <div className="footlink">
          <ul>
            <li>
              <span>Company</span>
            </li>
            <li>Blog</li>
            <li>Career</li>
            <li>Privacy</li>
            <li>About</li>
          </ul>
        </div>
        <div className="footlink">
          <ul>
            <li>
              <span>Support</span>
            </li>
            <li>Documentation</li>
            <li>Security</li>
            <li>Mobility Guide</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div className="footlink">
          <ul>
            <li>
              <span>Legal</span>
            </li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Cookie Information</li>
            <li>GDPR Commitment</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Footer;
