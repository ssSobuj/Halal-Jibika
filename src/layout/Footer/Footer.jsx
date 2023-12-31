import { Link } from "react-router-dom";
import "./footer.css";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      {" "}
      <footer>
        <div className="footer-container">
          <div className="footer-section">
            <h4>Our vision</h4>
            <p>
              Our vision is “Keep hardworking, take patients and make yourself
              always ready for jobs”
            </p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"jobs"}>Jobs</Link>
              </li>
              <li>
                <Link to={"contact"}>Contact Us</Link>
              </li>
              <li>
                <Link to={"privacyPolicy"}>Privacy Policy</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="footer-social">
              <a href="#" target="_blank">
                <span>
                  <FaFacebook />
                </span>{" "}
                <span>Facebook</span>
              </a>
              <a href="#" target="_blank">
                <span><FaTwitter /></span> <span>Twitter</span>
              </a>
              <a href="#" target="_blank">
                <span><FaInstagram /></span> <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
