import './App.css';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import Training from './components/Training';
import Reel from './components/Reel';
import About from './components/About';
import ThankYou from './components/ThankYou';

function App() {
  return (
    <div className="App">
      <LandingPage />
      <Navbar />
      <Training />
      <Reel />
      <About />
      <ThankYou />
    </div>
  );
}

export default App;
