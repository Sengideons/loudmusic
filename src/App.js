import './App.css';
import About from './components/About/About';
import Count from './components/Count/Count';
import Gallery from './components/Gallery/Gallery';
import Guest from './components/Guest/Guest';
import Header from './components/Header/Header';
import Ticket from './components/Ticket/Ticket';
import Venue from './components/venue/Venue';
import Footer from './Footer/Footer';
//import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Count />
      <About/>
      <Guest />
      <Ticket />
      <Gallery />
      <Venue />
      <Footer />
      
    </div>
  );
}

export default App;
