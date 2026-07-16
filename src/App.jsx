import './App.css';
import ButtonGradient from './assets/svg/ButtonGradient';
import Header from './components/header';

function App() {
  return (
    <>

      <div className="pt-[60px] lg:pt-[80px] overflow-hidden">
        <Header />
      </div>

      <ButtonGradient />
    </>
  );
}

export default App;
