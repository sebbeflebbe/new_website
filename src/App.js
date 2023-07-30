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
    </div>
  );
}

export default App;
