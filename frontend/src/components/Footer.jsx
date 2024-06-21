import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <div>
      <footer className="pc">
        <a href="#" className="github">
          {/* <FontAwesomeIcon icon="fa-brands fa-github" /> */}
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="#" className="codepen">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <div className="copyright">
          <p>
            Made by
            <a href="#" target="_blank">
              {" "}
              <span>&nbsp;JAYA R&nbsp;</span>
            </a>
          </p>
        </div>
      </footer>

      {/* <footer className="mobile">
        <a href="#" className="github">
          <ion-icon
            className="fa fa-github fa-3x"
            aria-hidden="true"
            name="logo-github"
          ></ion-icon>
        </a>
        <a href="#" className="codepen">
          <ion-icon
            className="fa fa-github fa-3x"
            aria-hidden="true"
            name="logo-codepen"
          ></ion-icon>
        </a>
        <div className="copyright">
          <p>
            {" "}
            Made by <span>&nbsp;Jaya R&nbsp;</span>
          </p>
        </div>
      </footer> */}
    </div>
  );
};

export default Footer;
