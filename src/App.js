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

window.addEventListener('scroll', () => {
  const contactBubble = document.getElementById('apply');
  contactBubble.style.opacity = window.scrollY > 10 ? 1 : 0;
});

function App() {
  return (
    <div className="App">
      <Contact />

      <ContactBubble />

      <Header />

      <Home />

      <About />

      <Members />

      <Partners />

      <Buy />

      <Footer />
    </div>
  );
}

export default App;
