import "./footer.css";
import instagram from "./../../img/icons/instagram.svg";
import twitter from "./../../img/icons/twitter.svg";
import linkedIn from "./../../img/icons/linkedIn.svg";
import gitHub from "./../../img/icons/gitHub.svg"; 

 const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a href="https://www.instagram.com/_nikita_bashtovoy_/" rel="noreferrer" target="_blank">
                <img src={instagram} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="https://twitter.com/Nkta118386" rel="noreferrer" target="_blank">
                <img src={twitter} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="https://github.com/Nikita130201" rel="noreferrer" target="_blank">
                <img src={gitHub} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="https://www.linkedin.com/in/nikita-bashtovyi-811b04259/" rel="noreferrer" target="_blank">
                <img src={linkedIn} alt="Link" />
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p>© 2023 frontend-dev.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
