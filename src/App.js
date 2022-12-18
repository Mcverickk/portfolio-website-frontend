import "./App.css";
import { TypeAnimation } from "react-type-animation";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  NAME,
  INSTAGRAM,
  TWITTER,
  LINKEDIN,
  GITHUB,
  MEDIUM,
  PROJECT1,
  PROJECT2,
  PROJECT3,
  PROJECT4,
  PROJECT5,
  PROJECT6,
  PROJECT7,
  PROJECT8,
  PROJECT9,
  BIO,
  WORK,
  EMAIL,
  PHONE,
  LOCATION,
  TYPOGRAPHY,
  RESUME_FILENAME,
} from "./constants";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Alert from "react-bootstrap/Alert";

function App() {
  AOS.init();
  const githubIcon = <i class="bi socialicon1 bi-github"></i>;
  const mediumIcon = <i class="bi socialicon1 bi-medium"></i>;
  const websiteIcon = <i class="bi socialicon1 bi-globe"></i>;

  const NavHeader = () => {
    return (
      <>
        <header id="header" class="d-flex flex-column justify-content-center">
          <nav id="navbar" class="navbar nav-menu">
            <ul>
              <li>
                <a href="#hero" class="nav-link scrollto active">
                  <i class="bi bi-house"></i> <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#about" class="nav-link scrollto">
                  <i class="bi bi-person"></i> <span>About</span>
                </a>
              </li>
              <li>
                <a href="#experience" class="nav-link scrollto">
                  <i class="bi bi-briefcase"></i> <span>Experience</span>
                </a>
              </li>
              <li>
                <a href="#projects" class="nav-link scrollto">
                  <i class="bi bi-file-earmark-text"></i> <span>Projects</span>
                </a>
              </li>
              <li>
                <a href="#skills" class="nav-link scrollto">
                  <i class="bi bi-gear"></i> <span>Skills</span>
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </>
    );
  };

  const CenterInfo = (props) => {
    return (
      <div
        class="centerinfo"
        data-aos="zoom-in"
        data-aos-delay="100"
        data-aos-duration="1000"
      >
        <div
          class="dp"
          data-aos="fade-left"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          <img class="dpimage" src={props.dp} width="150px" />

          <div>
            <a href={`./custom/${RESUME_FILENAME}`} download>
              <button className="downloadResume">
                Resume <i class="bi downloadIcon bi-download"></i>
              </button>
            </a>
          </div>
        </div>

        <div data-aos="fade-right" data-aos-delay="100">
          <h1>{props.name}</h1>
          <p>
            I'm a
            <TypeAnimation
              // Same String at the start will only be typed once, initially
              sequence={TYPOGRAPHY}
              speed={40} // Custom Speed from 1-99 - Default Speed: 40
              style={{ fontSize: "1em" }}
              wrapper="span" // Animation will be rendered as a <span>
              repeat={Infinity} // Repeat this Animation Sequence infinitely
            />
            <span
              class="typed"
              data-typed-items="Designer, Developer, Freelancer, Photographer"
            ></span>
          </p>
          <div class="social-links">
            <a href={props.linkedin} class="linkedin" target="_blank">
              <i class="bi bi-linkedin"></i>
            </a>
            <a href={props.github} class="github" target="_blank">
              <i class="bi bi-github"></i>
            </a>
            <a href={props.twitter} class="twitter" target="_blank">
              <i class="bi bi-twitter"></i>
            </a>
            <a href={props.instagram} class="instagram" target="_blank">
              <i class="bi bi-instagram"></i>
            </a>
            <a href={props.medium} class="medium" target="_blank">
              <i class="bi bi-medium"></i>
            </a>
          </div>
          <div class="contactInfo">
            <div class="contactInfoRow">
              <i class="bi bi-envelope-at-fill"></i>
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${EMAIL}`}
                target="_blank"
                class="contactArea"
              >
                <h6 class="contactDetails">{EMAIL}</h6>
              </a>
            </div>
            <div class="contactInfoRow">
              <i class="bi bi-telephone-fill"></i>
              <h6 class="contactDetails">{PHONE}</h6>
            </div>
            <div class="contactInfoRow">
              <i class="bi bi-geo-alt-fill"></i>
              <h6 class="contactDetails">{LOCATION}</h6>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const About = (props) => {
    return (
      <div class="container">
        <div class="section-about">
          <h2 class="about-title">Who am I?</h2>
          <h3 class="bio" data-aos="fade-up" data-aos-duration="500">
            {BIO}
          </h3>
          <img src="seperator.webp" class="line" />
        </div>
      </div>
    );
  };

  const Experience = () => {
    return (
      <div class="experienceBox">
        <h2 class="experience-title">Work Experience</h2>
        <Tab.Container id="left-tabs-example" defaultActiveKey="tab1">
          <div className="companyBox">
            <Col sm={3} className="leftCol">
              <Nav
                id="experience"
                variant="pills"
                className="flex-column companyNav"
              >
                <Nav.Item className="companyItemTab1">
                  <Nav.Link
                    eventKey="tab1"
                    class="active"
                    className="companyLinkTab1"
                  >
                    {WORK.TWO.COMPANY}
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="companyItemTab2">
                  <Nav.Link eventKey="tab2" className="companyLinkTab2">
                    {WORK.THREE.COMPANY}
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="companyItemTab2">
                  <Nav.Link eventKey="tab3" className="companyLinkTab2">
                    {WORK.ONE.COMPANY}
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="companyItemTab2">
                  <Nav.Link eventKey="tab4" className="companyLinkTab2">
                    {WORK.FOUR.COMPANY}
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="companyItemTab2">
                  <Nav.Link eventKey="tab5" className="companyLinkTab2">
                    {WORK.FIVE.COMPANY}
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={5}>
              <Tab.Content>
                <Tab.Pane eventKey="tab1">
                  <GetWorkDetails info="tab1" />
                </Tab.Pane>
                <Tab.Pane eventKey="tab2">
                  <GetWorkDetails info="tab2" />
                </Tab.Pane>
                <Tab.Pane eventKey="tab3">
                  <GetWorkDetails info="tab3" />
                </Tab.Pane>
                <Tab.Pane eventKey="tab4">
                  <GetWorkDetails info="tab4" />
                </Tab.Pane>
                <Tab.Pane eventKey="tab5">
                  <GetWorkDetails info="tab5" />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </div>
        </Tab.Container>
      </div>
    );
  };

  const GetWorkDetails = (props) => {
    let result;
    if (props.info === "tab3") {
      const details = WORK.ONE.DETAILS.map((t) => (
        <li class="workDetailItem">
          <p class="workDetails">{t}</p>
        </li>
      ));
      result = (
        <div class="workDetailBox">
          <h3 class="comapanyNameHeader">{WORK.ONE.ROLE}</h3>
          <p class="workPeriod">{WORK.ONE.TIME}</p>

          <ul class="workDetailList">{details}</ul>
        </div>
      );
    } else if (props.info === "tab1") {
      const details = WORK.TWO.DETAILS.map((t) => (
        <li class="workDetailItem">
          <p class="workDetails">{t}</p>
        </li>
      ));
      result = (
        <div class="workDetailBox">
          <h3 class="comapanyNameHeader">{WORK.TWO.ROLE}</h3>
          <p class="workPeriod">{WORK.TWO.TIME}</p>

          <ul class="workDetailList">{details}</ul>
        </div>
      );
    } else if (props.info === "tab2") {
      const details = WORK.THREE.DETAILS.map((t) => (
        <li class="workDetailItem">
          <p class="workDetails">{t}</p>
        </li>
      ));
      result = (
        <div class="workDetailBox">
          <h3 class="comapanyNameHeader">{WORK.THREE.ROLE}</h3>
          <p class="workPeriod">{WORK.THREE.TIME}</p>

          <ul class="workDetailList">{details}</ul>
        </div>
      );
    } else if (props.info === "tab4") {
      const details = WORK.FOUR.DETAILS.map((t) => (
        <li class="workDetailItem">
          <p class="workDetails">{t}</p>
        </li>
      ));
      result = (
        <div class="workDetailBox">
          <h3 class="comapanyNameHeader">{WORK.FOUR.ROLE}</h3>
          <p class="workPeriod">{WORK.FOUR.TIME}</p>

          <ul class="workDetailList">{details}</ul>
        </div>
      );
    } else if (props.info === "tab5") {
      const details = WORK.FIVE.DETAILS.map((t) => (
        <li class="workDetailItem">
          <p class="workDetails">{t}</p>
        </li>
      ));
      result = (
        <div class="workDetailBox">
          <h3 class="comapanyNameHeader">{WORK.FIVE.ROLE}</h3>
          <p class="workPeriod">{WORK.FIVE.TIME}</p>
          <ul class="workDetailList">{details}</ul>
        </div>
      );
    } else {
      result = (
        <div>
          <h3>Error</h3>;
        </div>
      );
    }
    return result;
  };

  const Projects = () => {
    return (
      <>
        <h2 class="projectsHeader">My Projects</h2>
        <div class="projectCollection">
          <WebDevCard
            projectType={PROJECT7.TYPE}
            projectTitle={PROJECT7.TITLE}
            projectDetails={PROJECT7.DETAILS}
            projectLink={PROJECT7.LINK}
            projectIcon={githubIcon}
            tags={PROJECT7.TAGS}
          />
          <BlockchainCard
            projectType={PROJECT1.TYPE}
            projectTitle={PROJECT1.TITLE}
            projectDetails={PROJECT1.DETAILS}
            projectLink={PROJECT1.LINK}
            tags={PROJECT1.TAGS}
          />
          <BlockchainCard
            projectType={PROJECT2.TYPE}
            projectTitle={PROJECT2.TITLE}
            projectDetails={PROJECT2.DETAILS}
            projectLink={PROJECT2.LINK}
            projectIcon={websiteIcon}
            tags={PROJECT2.TAGS}
          />
          <ArticleCard
            projectType={PROJECT9.TYPE}
            projectTitle={PROJECT9.TITLE}
            projectDetails={PROJECT9.DETAILS}
            projectLink={PROJECT9.LINK}
            tags={PROJECT9.TAGS}
          />

          <ArticleCard
            projectType={PROJECT3.TYPE}
            projectTitle={PROJECT3.TITLE}
            projectDetails={PROJECT3.DETAILS}
            projectLink={PROJECT3.LINK}
            projectIcon={mediumIcon}
            tags={PROJECT3.TAGS}
          />
          <BlockchainCard
            projectType={PROJECT4.TYPE}
            projectTitle={PROJECT4.TITLE}
            projectDetails={PROJECT4.DETAILS}
            projectLink={PROJECT4.LINK}
            projectIcon={githubIcon}
            tags={PROJECT4.TAGS}
          />
          <ArticleCard
            projectType={PROJECT5.TYPE}
            projectTitle={PROJECT5.TITLE}
            projectDetails={PROJECT5.DETAILS}
            projectLink={PROJECT5.LINK}
            projectIcon={mediumIcon}
            tags={PROJECT5.TAGS}
          />
          <ArticleCard
            projectType={PROJECT6.TYPE}
            projectTitle={PROJECT6.TITLE}
            projectDetails={PROJECT6.DETAILS}
            projectLink={PROJECT6.LINK}
            projectIcon={mediumIcon}
            tags={PROJECT6.TAGS}
          />
          <BlockchainCard
            projectType={PROJECT8.TYPE}
            projectTitle={PROJECT8.TITLE}
            projectDetails={PROJECT8.DETAILS}
            projectLink={PROJECT8.LINK}
            projectIcon={githubIcon}
            tags={PROJECT8.TAGS}
          />
        </div>
      </>
    );
  };

  const ArticleCard = (props) => {
    return (
      <div class="articleCard">
        <h5 class="projectArticle">{props.projectType}</h5>
        <div class="projectHeader">
          <h3 class="projectTitle">{props.projectTitle}</h3>
          <a href={props.projectLink} target="_blank">
            {props.projectIcon}
          </a>
        </div>
        <p class="projectDetails">{props.projectDetails}</p>

        <BubbleGenerator bubbles={props.tags} />
      </div>
    );
  };
  const BlockchainCard = (props) => {
    return (
      <div class="blockchainCard">
        <h5 class="projectBlockchain">{props.projectType}</h5>
        <div class="projectHeader">
          <h3 class="projectTitle">{props.projectTitle}</h3>
          <a href={props.projectLink} target="_blank">
            {props.projectIcon}
          </a>
        </div>
        <p class="projectDetails">{props.projectDetails}</p>
        <BubbleGenerator bubbles={props.tags} />
      </div>
    );
  };
  const WebDevCard = (props) => {
    return (
      <div class="webDevCard">
        <h5 class="projectWebDev">{props.projectType}</h5>
        <div class="projectHeader">
          <h3 class="projectTitle">{props.projectTitle}</h3>
          <a href={props.projectLink} target="_blank">
            {props.projectIcon}
          </a>
        </div>
        <p class="projectDetails">{props.projectDetails}</p>
        <BubbleGenerator bubbles={props.tags} />
      </div>
    );
  };
  const BubbleGenerator = (props) => {
    const bubbleList = props.bubbles.map((t) => (
      <li class="bubbleListItem">
        <button class="bubble">{t}</button>
      </li>
    ));

    return <ul class="bubbleList">{bubbleList}</ul>;
  };

  const SkillSection = () => {
    return (
      <div class="skills-header">
        <h2 class="sectionTitle">Skills</h2>
        <div class="skillsBox" data-aos="zoom-up" data-aos-duration="5000">
          <LanguageSkills />
          <BlockchainSkills />
          <WebDevSkills />
        </div>
      </div>
    );
  };

  const LanguageSkills = () => {
    return (
      <div id="languageSkillSection">
        <h3 class="skill-title"> PROGRAMMING LANGUAGES </h3>
        <ul class="skilllist">
          <SkillItem
            src="./tech-stack/javascript.svg"
            width="75px"
            titleName="Javascript"
          />

          <SkillItem
            src="./tech-stack/cplusplus.svg"
            width="75px"
            titleName="C++"
          />

          <SkillItem
            src="./tech-stack/html-5.svg"
            width="65px"
            titleName="HTML"
          />

          <SkillItem
            src="./tech-stack/css-3.svg"
            width="65px"
            titleName="CSS"
          />

          <SkillItem
            src="./tech-stack/python.svg"
            width="75px"
            titleName="Python"
          />
        </ul>
      </div>
    );
  };

  const BlockchainSkills = () => {
    return (
      <div id="blockchainSkillSection">
        <h3 class="skill-title"> BLOCKCHAIN </h3>
        <ul class="skilllist">
          <SkillItem
            src="./tech-stack/ethereum.svg"
            width="50px"
            titleName="Ethereum"
          />

          <SkillItem
            src="./tech-stack/solidity.svg"
            width="50px"
            titleName="Solidity"
          />

          <SkillItem
            src="./tech-stack/hardhat.svg"
            width="150px"
            titleName="Hardhat"
          />

          <SkillItem
            src="./tech-stack/ethers.svg"
            width="100px"
            titleName="Ethers.js"
          />

          <SkillItem
            src="./tech-stack/truffle.svg"
            width="80px"
            titleName="Truffle"
          />

          <SkillItem
            src="./tech-stack/web3js.svg"
            width="80px"
            titleName="Web3.js"
          />

          <SkillItem
            src="./tech-stack/ganache-icon.svg"
            width="70px"
            titleName="Ganache"
          />

          <SkillItem
            src="./tech-stack/open-zeppelin.svg"
            width="160px"
            titleName="Open Zeppelin"
          />
        </ul>
      </div>
    );
  };

  const WebDevSkills = () => {
    return (
      <div id="webDevSkillSection">
        <h3 class="skill-title"> WEB DEVELOPEMENT </h3>
        <ul class="skilllist">
          <SkillItem
            src="./tech-stack/mongodb.svg"
            width="150px"
            titleName="MongoDB"
          />

          <SkillItem
            src="./tech-stack/express.svg"
            width="130px"
            titleName="Express"
          />

          <SkillItem
            src="./tech-stack/react.svg"
            width="80px"
            titleName="React.js"
          />

          <SkillItem
            src="./tech-stack/nodejs.svg"
            width="100px"
            titleName="Node.js"
          />

          <SkillItem
            src="./tech-stack/nextjs.svg"
            width="120px"
            titleName="Next.js"
          />
        </ul>
      </div>
    );
  };
  const SkillItem = (props) => {
    return (
      <li class="skillitem" title={props.titleName}>
        <img src={props.src} class="skillItemImage" width={props.width} />
      </li>
    );
  };

  const Footer = (props) => {
    return (
      <footer id="Footer">
        <h3>{props.name}</h3>
        <div class="social-links">
          <a href={props.twitter} class="twitter" target="_blank">
            <i class="bi bi-twitter"></i>
          </a>
          <a href={props.linkedin} class="linkedin" target="_blank">
            <i class="bi bi-linkedin"></i>
          </a>
          <a href={props.github} class="github" target="_blank">
            <i class="bi bi-github"></i>
          </a>
          <a href={props.medium} class="medium" target="_blank">
            <i class="bi bi-medium"></i>
          </a>
          <a href={props.instagram} class="instagram" target="_blank">
            <i class="bi bi-instagram"></i>
          </a>
        </div>
        <p>Made with passion & 🎧</p>
      </footer>
    );
  };

  const Desktop = () => {
    return (
      <div className="desktop">
        <NavHeader />
        <section id="hero" class="d-flex flex-column justify-content-center">
          <CenterInfo
            name={NAME}
            dp="./custom/dp.webp"
            instagram={INSTAGRAM}
            github={GITHUB}
            twitter={TWITTER}
            linkedin={LINKEDIN}
            medium={MEDIUM}
          />
        </section>
        <div className="backgroundColor">
          <section id="about" class="about">
            <About />
          </section>

          <section id="experience" class="experience">
            <Experience />
          </section>

          <section id="projects" class="projects">
            <Projects />
          </section>

          <section id="skills" class="skills">
            <SkillSection />
          </section>
        </div>
        <Footer
          name={NAME}
          instagram={INSTAGRAM}
          github={GITHUB}
          twitter={TWITTER}
          linkedin={LINKEDIN}
          medium={MEDIUM}
        />
      </div>
    );
  };

  const Mobile = () => {
    return (
      <div className="mobile">
        <section id="heroMobile" class="heroMobile">
          <div
            class="centerPiece"
            data-aos="zoom-in"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            <img class="dpimage" src="./custom/dp.webp" width="150px" />

            <h1 class="name">{NAME}</h1>
            <div className="typo">
              <p className="fixedText">I'm a</p>
              <p className="changingText">
                <TypeAnimation
                  // Same String at the start will only be typed once, initially
                  sequence={[
                    1200,
                    "Blockchain Developer",
                    1000,
                    " Full-stack Web Developer",
                    1000,
                    " Photographer",
                    1000,
                    " Traveller",
                    1000,
                    " #buidler",
                  ]}
                  speed={40} // Custom Speed from 1-99 - Default Speed: 40
                  style={{ fontSize: "1em" }}
                  wrapper="span" // Animation will be rendered as a <span>
                  repeat={Infinity} // Repeat this Animation Sequence infinitely
                />
                <span
                  class="typed"
                  data-typed-items="Designer, Developer, Freelancer, Photographer"
                ></span>
              </p>
            </div>
            <div class="social-links">
              <a href={LINKEDIN} class="linkedin" target="_blank">
                <i class="bi bi-linkedin"></i>
              </a>
              <a href={GITHUB} class="github" target="_blank">
                <i class="bi bi-github"></i>
              </a>
              <a href={TWITTER} class="twitter" target="_blank">
                <i class="bi bi-twitter"></i>
              </a>
              <a href={INSTAGRAM} class="instagram" target="_blank">
                <i class="bi bi-instagram"></i>
              </a>
              <a href={MEDIUM} class="medium" target="_blank">
                <i class="bi bi-medium"></i>
              </a>
            </div>
            <div class="contactInfo">
              <div class="contactInfoRow">
                <i class="bi bi-envelope-at-fill"></i>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=chiragagarwal2001@gmail.com"
                  target="_blank"
                  class="contactArea"
                >
                  <h6 class="contactDetails">{EMAIL}</h6>
                </a>
              </div>
              <div class="contactInfoRow">
                <i class="bi bi-telephone-fill"></i>
                <h6 class="contactDetails">{PHONE}</h6>
              </div>
              <div class="contactInfoRow">
                <i class="bi bi-geo-alt-fill"></i>
                <h6 class="contactDetails">{LOCATION}</h6>
              </div>
            </div>

            <div className="desktopAlert">
              {["info"].map((variant) => (
                <Alert
                  key={variant}
                  variant={variant}
                  className="desktopAlertText"
                >
                  Please visit the website on a desktop to view my projects,
                  work experience & skills!
                </Alert>
              ))}
            </div>

            <div>
              <a href="./custom/ChiragAgarwal_Resume_v2.pdf" download>
                <button className="downloadResume">
                  Resume <i class="bi downloadIcon bi-download"></i>
                </button>
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  };

  return (
    <div className="App">
      <Desktop />
      <Mobile />
    </div>
  );
}

export default App;
