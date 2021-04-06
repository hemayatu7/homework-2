import { FaGithub } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Hero() {
  return (
    <section>
      <div className="holder">
        <div className="home">
          <div className="prof"></div>
          <div className="txt">
            <h1>maya codes</h1>
            <h5>front-end developer</h5>
          </div>
          <div className="icons">
            <i>
              <FaDribbble />
            </i>
            <i>
              <FaTwitter />
            </i>
            <i>
              <FaGithub />
            </i>
          </div>
        </div>
        <div className="cover">
          <div className="cover-text"></div>

          <h1>maya codes</h1>
          <h5>front-end developer</h5>
        </div>
      </div>
    </section>
  );
}
export default Hero;
