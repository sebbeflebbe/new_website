import logo from './byteburstlogo.remade.png';
import sebastianImage from './Sebastian_bild.jpg';
import './App.css';
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import React from 'react';
import Slider from "react-slick";
import jazzigtImage from './Jazzigt.png';
import OpenScanImage from './OpenScanNew.jpg';
import { Link } from 'react-scroll';

function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="App">
      <div className="header">
        <img src={logo} alt="Byte Burst Logo" className="logo" />
        <p className="header-text">BYTEBURST</p>
      </div>
      <div className="banner">
        <Link
          to="missionAndVision"
          smooth={true}
          duration={500}
          className="banner-button"
        >
          About us
        </Link>
        <Link
          to="consultants"
          smooth={true}
          duration={500}
          className="banner-button"
        >
          Consultants
        </Link>
        <Link
          to="portfolio"
          smooth={true}
          duration={500}
          className="banner-button"
        >
          Portfolio
        </Link>
      </div>
      <div className="banner2">
        <p className="banner2-text">FUELING TECH EXCELLENCE ONE BYTE AT A TIME</p>
      </div>
      <p className="title" id="missionAndVision">Our mission and vision</p>
      <div className="columns">
        <p className="column-text">Founded in 2023 by Sebastian Andersson, a junior developer with a passion for technology, ByteBurst is a software development company committed to delivering excellent results for clients. We are a young team that embraces challenges, seeks growth opportunities, and prioritizes customer satisfaction.
          Our mission is to provide flexible and cost-effective software solutions tailored to meet individual needs. We value continuous learning, take on diverse projects, and offer innovative solutions to clients.
          Whether you're a startup or an established enterprise, our developers are ready to assist you with technical questions and transparent communication.</p>
        <p className="column-text">We believe in the joy of the development journey, holding steadfast to our core values of learning and patience. Our team stays up-to-date with industry trends to deliver contemporary solutions.
          At ByteBurst, we cherish patience, attention to detail, and enthusiasm in every project we undertake.
          Let us accompany you on your journey to success. Explore our services, meet our consultants, and experience the ByteBurst difference. Contact us today and embark on this exciting adventure!</p>
      </div>
      <div className="banner3">
        <div className="columns3">
          <div className="column3-container">
            <p className="column3-title" id="consultants">Presentation</p>
            <p className="column3-text">Meet Sebastian, a junior software developer with a unique background in political science,
              auditing, and education. His diverse experience has honed a broad perspective and a rich skill set, now applied to
              technology. His adaptability and eagerness to embrace new challenges are evident in his career transition, showcasing his
              analytical prowess, communication skills, and ability to simplify complex concepts. As a developer, he thrives on collaboration,
              problem-solving, and continuous learning. His unconventional journey makes him a valuable asset to any team, bringing a wealth of
              experience and a fresh perspective. Choose him for your next project and experience the difference a dedicated and versatile developer
              can make.</p>
          </div>
          <div className="column3-container">
            <p className="column3-title">Skillset</p>
            <p className="column3-text">
              Java / Linux /
              Aws / Python /
              Typescript / GitHub /
              SQL / NoSQL /
              Flask / React /
              SST.dev / CloudQuery /
              Jupyter n.b / Notion /
              Cloudflare / Snyk /
              Grype / Trivy /
              CI/CD / Code as infrastructure /
              Langchain / C /
              Vimp / Rest-API /
              Node.js / PowerShell /
              GCP / Azure /
              Agile / Docker /
              Vercel / Heroku</p>
          </div>
          <div className="column3-container">
            <img src={sebastianImage} alt="Sebastian" className="sebastian-image" />
          </div>
        </div>
      </div>
      <div className="footer">
        <p>
          <a href="tel:070-039-3805"><FaPhone /></a>
          <a href="sebastian@byteburst.dev"><FaEnvelope /></a>
          <a href="https://www.linkedin.com/company/byteburst/?viewAsMember=true" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/sebbeflebbe" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        </p>
      </div>
      <div className="banner4" id="portfolio">
        <Slider {...settings}>
        <div className="slide-container">
            <h3 className="slide-title">OpenScan</h3>
            <p className="slide-text">Introducing OpenScan: Your CLI Sidekick for Easy Vulnerability Scanning!
                        <br></br>
              Hey developers, meet OpenScan! It's the ultimate CLI solution for swift vulnerability scanning. No fuss, no hassle – just fire up your command line, and OpenScan does the rest!
                        With OpenScan, you'll effortlessly scan your projects for vulnerabilities at lightning speed. We've made it user-friendly for pros and newbies alike. Stay secure without slowing down!
                        OpenScan plays nice with various platforms and languages. It's the perfect balance of effectiveness and ease.
                        Get OpenScan, and let's make vulnerability scanning a breeze. Say goodbye to worries, and scan like a pro! 🚀🔒</p>
            <img src={OpenScanImage} alt="OpenScan" className="slide-image_1" />
          </div>
          <div className="slide-container">
            <h3 className="slide-title">Halloween-game</h3>
            <p className="slide-text">Get ready for a spooktacular adventure this Halloween, brought to you by ByteBurst! 🎃👻
                        <br></br>
              Picture this: Geocaching meets Halloween, and it's going down in the breathtaking city of Gothenburg! 🗺️🌆
                        <br></br>
              We've cooked up a thrilling game that'll have you searching for hidden treasures around famous landmarks. It's like a real-life treasure hunt, but with a spooky twist! 🕵️‍♂️🏰
                        <br></br>
              Get your crew together and unleash your inner explorer as you decipher clues and unearth hidden caches. Feel the excitement rise as you venture through the city's iconic spots, all while the Halloween spirit is in full swing! 🌙🦇
                        <br></br>
              So, are you ready for a Halloween adventure like no other? Join us, and let's make this Halloween unforgettable! 🎉🎊</p>
              <img src={logo} alt="Byte Burst Logo" className="slider-logo" />
          </div>
          <div className="slide-container">
            <h3 className="slide-title">Website</h3>
            <p className="slide-text">I make simple webpages to a competitive price.
            </p>
            <img src={jazzigtImage} alt="Jazzigt" className="slide-image_2" />
          </div>
        </Slider>
      </div>        
    </div>
  );
}

export default App;
