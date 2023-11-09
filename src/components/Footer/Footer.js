import './Footer.css';
import linkedin from '../../images/linkedin.png';
import github from '../../images/github.png';

function Footer() {
  return (
    <div className="footer">
      <div className="title-block">
        <div className="title-logo">
          {/* <img src={tomatillo} className="footer-logo" alt="rancid logo" /> */}
          <h2 className="subtitle">Harry Potter Magic Moments</h2>
        </div>
        <p className="project-details">
          Harry Potter Magical Moments is a Turing School Module 3 project built
          with React.js. Designed and developed by FE 2307 student Ann
          Hochworter.
        </p>
      </div>
      <div className="linkedin-block">
        <div className="title-icon">
          <img src={linkedin} className="footer-icon" alt="linkedin-icon" />
          <h2 className="subtitle">LinkedIn</h2>
        </div>
        <p>
          <a href="https://www.linkedin.com/in/annhochworter/">
            Ann Hochworter
          </a>
        </p>
      </div>
      <div className="github-block">
        <div className="title-icon">
          <img src={github} className="footer-icon gh" alt="github-icon" />
          <h2 className="subtitle">GitHub</h2>
        </div>
        <p>
          <a href="https://github.com/AHochworter">github.com/AHochworter</a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
