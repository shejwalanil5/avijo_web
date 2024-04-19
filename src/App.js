import './App.css';
import Footer from './Pages/Footer';
import Hero from './Pages/Hero';
import Home from './Pages/Home';
import Hppc from './Pages/Hppc';
import InfoDoctors from './Pages/InfoDoctors';
import Information from './Pages/Information'
import Labs from './Pages/Labs';
import Pharmacy from './Pages/Pharmacy';

function App() {
  return (
    <div>
      <Home/>
      <Hero/>
      <Information/>
      <InfoDoctors/>
      <Pharmacy/>
      <Labs/>
      <Hppc/>
      <Footer/>
    </div>
  );
}

export default App;
