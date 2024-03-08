import './App.css';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import Training from './components/Training';
import Reel from './components/Reel';
import About from './components/About';
import ThankYou from './components/ThankYou';
import Photos from './components/Photos';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <LandingPage />
      <Navbar />
      <Training />
      <Reel />
      <About />
      <ThankYou />
      <Photos />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
