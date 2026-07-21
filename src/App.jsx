import './App.css';
import ButtonGradient from './assets/svg/ButtonGradient';
import Benefits from './components/Benefits';
import Collaboration from './components/Collaboration';
import Footer from './components/Footer';
import Header from './components/header';
import Hero from './components/hero';
import Pricing from './components/Pricing';
import Roadmap from './components/roadmap';
import Services from './components/services';

function App() {
  return (
    <>
      <div className="pt-15 lg:pt-20 overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Roadmap />
        <Pricing />
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
}

export default App;
