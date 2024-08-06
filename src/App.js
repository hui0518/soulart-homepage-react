import './App.css';
import About from './components/About';
import Header from './components/Header';
import Home from './components/Home';
import Members from './components/Members';
import Partners from './components/Partners';
import Buy from './components/Buy';
import Footer from './components/Footer';
import Contact from './components/Contact';
import ContactBubble from './components/ContactBubble';
import Perf from './components/Perf';
import BuyPopup from './components/BuyPopup';

// declare css variables here
// mobile <= 768px;
// 768px < tablet <= 1024px;
// 1024px < desktop

function App() {
  return (
    <div className="App">
      <Contact />
      <ContactBubble />
      <BuyPopup />

      <Header />

      <Home />

      <About />
      <Perf />
      <Members />
      <Partners />
      <Buy />

      <Footer />
    </div>
  );
}

export default App;
