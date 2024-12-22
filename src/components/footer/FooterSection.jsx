import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { LuFacebook } from "react-icons/lu";
import { LuInstagram } from "react-icons/lu";
import { LuLinkedin } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import { LuTwitter } from "react-icons/lu";
import "./footer-section.css";

function FooterSection() {
  return (
    <section className="footer">
      <div className="footer-flex">
        <div className="footer-logo-container">
          <div className="footer-logo">
            <img src={logo} alt="logo" />
          </div>
          <div>
            <span>Agency</span>
            <span>Creative</span>
          </div>
        </div>
        <div className="footer-grid">
          <div className="terms-and-policies">
            <span className="footer-title">Terms & policies</span>
            <Link to="/terms-of-service">Terms of Service</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </div>
          <div className="company">
            <span className="footer-title">Company</span>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
          <div className="contact">
            <span className="footer-title">Contact</span>
            <span className="phone-number">(+62) 893912392190</span>
            <span className="email">agecnycr@gmail.com</span>
          </div>
          <div className="location">
            <span className="footer-title">Location</span>
            <span>PT Osiris Real Estate Internasional</span>
            <span>Jl. KH. Wahid Hasyim Kel No.10D</span>
            <span>Jakarta, Indonesia</span>
            <span>team@OsirisRealEstate.com</span>
          </div>
        </div>
      </div>
      <div className="social-links">
        <a href="">
          <LuFacebook size={24} />
        </a>
        <a href="">
          <LuInstagram size={24} />
        </a>
        <a href="">
          <LuLinkedin size={24} />
        </a>
        <a href="">
          <MdOutlineMailOutline size={24} />
        </a>
        <a href="">
          <LuTwitter size={24} />
        </a>
      </div>
      <hr />
      <div className="copyright">
        Copyright @ 2022 Agency Creative. All Right Reserved
      </div>
    </section>
  );
}

export default FooterSection;
