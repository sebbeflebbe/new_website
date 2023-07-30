import logo from './byteburstlogo.remade.png';
import sebastianImage from './Sebastian_bild.jpg'; // Import the image
import './App.css';
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

function App() {
  return (
    <div className="App">
      <div className="header">
        <img src={logo} alt="Byte Burst Logo" className="logo" />
        <p className="header-text">BYTEBURST</p>
      </div>
      <div className="banner"></div>
      <div className="banner2">
        <p className="banner2-text">FUELING TECH EXCELLENCE ONE BYTE AT A TIME</p>
      </div>
      <p className="title">Our mission and vision</p>
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
            <p className="column3-title">Presentation</p>
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
            <img src={sebastianImage} alt="Sebastian" className="sebastian-image" /> {/* Add this line */}
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
    </div>
  );
}

export default App;
