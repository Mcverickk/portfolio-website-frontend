import "./App.css";
import { useState, useEffect } from "react";
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
} from "./constants";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";

function App() {
  AOS.init();
  const githubIcon = <i class="bi socialicon1 bi-github"></i>;
  const mediumIcon = <i class="bi socialicon1 bi-medium"></i>;
  const websiteIcon = <i class="bi socialicon1 bi-globe"></i>;

  const [tabActive, setTabActive] = useState("tab1");

  const handleTabClick = (value) => {
    if (value === tabActive) {
      return;
    }

    setTabActive(value);
  };

  // useEffect(() => {
  //   GetWorkDetails();
  // }, [tabActive]);

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
                <a href="#skills" class="nav-link scrollto">
                  <i class="bi bi-gear"></i> <span>Skills</span>
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
                <a href="#contact" class="nav-link scrollto">
                  <i class="bi bi-envelope"></i> <span>Contact</span>
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
      <div class="container">
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
          </div>
          <div data-aos="fade-right" data-aos-delay="100">
            <h1>{props.name}</h1>
            <p>
              I'm a
              <TypeAnimation
                // Same String at the start will only be typed once, initially
                sequence={[
                  1200,
                  " Blockchain Developer",
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
            <div class="social-links">
              <a href={props.linkedin} class="linkedin">
                <i class="bi bi-linkedin"></i>
              </a>
              <a href={props.github} class="github">
                <i class="bi bi-github"></i>
              </a>
              <a href={props.twitter} class="twitter">
                <i class="bi bi-twitter"></i>
              </a>
              <a href={props.instagram} class="instagram">
                <i class="bi bi-instagram"></i>
              </a>
              <a href={props.medium} class="medium">
                <i class="bi bi-medium"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const About = (props) => {
    return (
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>About</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>

        <div class="row">
          <div class="col-lg-4">
            <img src="dp.jpg" class="img-fluid" alt="" />
          </div>
          <div class="col-lg-8 pt-4 pt-lg-0 content">
            <h3>UI/UX Designer &amp; Web Developer.</h3>
            <p class="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div class="row">
              <div class="col-lg-6">
                <ul>
                  <li>
                    <i class="bi bi-chevron-right"></i>{" "}
                    <strong>Birthday:</strong> <span>1 May 1995</span>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i>{" "}
                    <strong>Website:</strong> <span>www.example.com</span>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i> <strong>Phone:</strong>{" "}
                    <span>+123 456 7890</span>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i> <strong>City:</strong>{" "}
                    <span>New York, USA</span>
                  </li>
                </ul>
              </div>
              <div class="col-lg-6">
                <ul>
                  <li>
                    <i class="bi bi-chevron-right"></i> <strong>Age:</strong>{" "}
                    <span>30</span>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i> <strong>Degree:</strong>{" "}
                    <span>Master</span>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i>{" "}
                    <strong>PhEmailone:</strong> <span>email@example.com</span>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i>{" "}
                    <strong>Freelance:</strong> <span>Available</span>
                  </li>
                </ul>
              </div>
            </div>
            <p>
              Officiis eligendi itaque labore et dolorum mollitia officiis optio
              vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor
              incidunt officia tempore. Et eius omnis. Cupiditate ut dicta
              maxime officiis quidem quia. Sed et consectetur qui quia
              repellendus itaque neque. Aliquid amet quidem ut quaerat
              cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium
              dolores.
            </p>
          </div>
        </div>
      </div>
    );
  };

  const SkillItem = (props) => {
    return (
      <li class="skillitem">
        <img src={props.src} class="skillItemImage" width={props.width} />
      </li>
    );
  };

  const LanguageSkills = () => {
    return (
      <>
        <h3 class="skill-title"> PROGRAMMING LANGUAGES </h3>
        <ul class="skilllist">
          <SkillItem src="./tech-stack/javascript.svg" width="75px" />

          <SkillItem src="./tech-stack/html-5.svg" width="65px" />

          <SkillItem src="./tech-stack/css-3.svg" width="65px" />

          <SkillItem src="./tech-stack/python.svg" width="75px" />
        </ul>
      </>
    );
  };

  const BlockchainSkills = () => {
    return (
      <>
        <h3 class="skill-title"> BLOCKCHAIN </h3>
        <ul class="skilllist">
          <SkillItem src="./tech-stack/ethereum.svg" width="50px" />

          <SkillItem src="./tech-stack/solidity.svg" width="50px" />

          <SkillItem src="./tech-stack/hardhat.svg" width="150px" />

          <SkillItem src="./tech-stack/ethers.svg" width="100px" />

          <SkillItem src="./tech-stack/truffle.svg" width="80px" />

          <SkillItem src="./tech-stack/web3js.svg" width="80px" />

          <SkillItem src="./tech-stack/ganache-icon.svg" width="70px" />

          <SkillItem src="./tech-stack/open-zeppelin.svg" width="160px" />
        </ul>
      </>
    );
  };

  const WebDevSkills = () => {
    return (
      <>
        <h3 class="skill-title"> WEB DEVELOPEMENT </h3>
        <ul class="skilllist">
          <SkillItem src="./tech-stack/mongodb.svg" width="150px" />

          <SkillItem src="./tech-stack/express.svg" width="130px" />

          <SkillItem src="./tech-stack/react.svg" width="80px" />

          <SkillItem src="./tech-stack/nodejs.svg" width="100px" />

          <SkillItem src="./tech-stack/nextjs.svg" width="120px" />
        </ul>
      </>
    );
  };

  const SkillSection = () => {
    return (
      <div class="skills-header">
        <h2 class="sectionTitle">SKILLS</h2>
        <LanguageSkills />
        <BlockchainSkills />
        <WebDevSkills />
      </div>
    );
  };

  const Projects = () => {
    return (
      <>
        <h2 class="projectsHeader">PROJECTS</h2>
        <div class="projectCollection">
          <WebDevCard
            projectType={PROJECT7.TYPE}
            projectTitle={PROJECT7.TITLE}
            projectDetails={PROJECT7.DETAILS}
            projectLink={PROJECT7.LINK}
            projectIcon={websiteIcon}
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
        </div>
      </>
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

  const ArticleCard = (props) => {
    return (
      <div class="articleCard">
        <h5 class="projectArticle">{props.projectType}</h5>
        <div class="projectHeader">
          <h3 class="projectTitle">{props.projectTitle}</h3>
          <a href={props.projectLink}>{props.projectIcon}</a>
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
          <a href={props.projectLink}>{props.projectIcon}</a>
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
          <a href={props.projectLink}>{props.projectIcon}</a>
        </div>
        <p class="projectDetails">{props.projectDetails}</p>
        <BubbleGenerator bubbles={props.tags} />
      </div>
    );
  };

  const GetWorkDetails = (props) => {
    let result;
    if (props.info === "tab1") {
      result = (
        <div class="workDetailBox">
          <h3 class="comapanyNameHeader">Blockchain Developer at Pay3</h3>
          <p class="workPeriod">January - June 2017</p>
          <ul class="workDetailList">
            <li class="workDetailItem">
              <p class="workDetails">My name is Chirag Agarwal</p>
            </li>
            <li class="workDetailItem">
              <p class="workDetails">I am a Blockchain Developer</p>
            </li>
          </ul>
        </div>
      );
    } else if (props.info === "tab2") {
      result = (
        <div class="workDetailBox">
          <h3 class="comapanyNameHeader">Blockchain Developer at Yushu</h3>
          <p class="workPeriod">January - June 2018</p>
          <ul class="workDetailList">
            <li class="workDetailItem">
              <p class="workDetails">My name is Chirag Agarwal.....</p>
            </li>
            <li class="workDetailItem">
              <p class="workDetails">I am a Blockchain Developer.....</p>
            </li>
          </ul>
        </div>
      );
    }
    return result;
  };

  const Experience = () => {
    return <></>;
  };

  const Contact = (props) => {
    return (
      <>
        <div class="contactDiv">
          <div class="imageDiv">
            <img
              src="./contact.jpg"
              width="400px"
              data-aos="zoom-in"
              data-aos-delay="100"
              data-aos-duration="1000"
            />
          </div>
          <div class="formDiv">
            <div>
              <h2>Lets chat!</h2>
            </div>
            <div class="formBox">
              <form>
                <div class="inputField">
                  <input
                    type="text"
                    class="form-control-1"
                    id="inputName"
                    placeholder="Your Name"
                  />
                  <input
                    type="email"
                    class="form-control-1"
                    id="exampleInputEmail"
                    aria-describedby="emailHelp"
                    placeholder="Email address"
                  />
                  <input
                    type="text"
                    class="form-control-1"
                    id="subject"
                    placeholder="Subject"
                  />
                  <input
                    type="text"
                    class="form-control-1 message"
                    id="message"
                    placeholder="Write your message"
                  />
                </div>
                <button type="submit" class="btn btn-dark">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  };

  const Footer = (props) => {
    return (
      <footer id="Footer">
        <h3>{props.name}</h3>
        <div class="social-links">
          <a href={props.twitter} class="twitter">
            <i class="bi bi-twitter"></i>
          </a>
          <a href={props.linkedin} class="linkedin">
            <i class="bi bi-linkedin"></i>
          </a>
          <a href={props.github} class="github">
            <i class="bi bi-github"></i>
          </a>
          <a href={props.medium} class="medium">
            <i class="bi bi-medium"></i>
          </a>
          <a href={props.instagram} class="instagram">
            <i class="bi bi-instagram"></i>
          </a>
        </div>
        <p>Made with passion & 🎧</p>
      </footer>
    );
  };

  return (
    <div className="App">
      <NavHeader />

      <section id="hero" class="d-flex flex-column justify-content-center">
        <CenterInfo
          name={NAME}
          dp="./dp.jpg"
          instagram={INSTAGRAM}
          github={GITHUB}
          twitter={TWITTER}
          linkedin={LINKEDIN}
          medium={MEDIUM}
        />
      </section>

      <section id="about" class="about">
        <About />
      </section>

      <section id="skills" class="skills">
        <SkillSection />
      </section>

      <section id="experience" class="experience">
        <Experience />
      </section>

      <section id="projects" class="projects">
        <Projects />
      </section>

      <section id="contact" class="contact">
        <Contact />
      </section>

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
}

export default App;
