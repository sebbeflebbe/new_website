import logo from './byteburstlogo.remade.png';
import './App.css';

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
    </div>
  );
}

export default App;
