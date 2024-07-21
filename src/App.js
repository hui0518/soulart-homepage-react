import './App.css';
import About from './components/About';
import Header from './components/Header';
import Home from './components/Home';
import Members from './components/Members';
import Partners from './components/Partners';
import Buy from './components/Buy';
import Footer from './components/Footer';
import Contact from './components/Contact';
import { motion } from 'framer-motion';

window.addEventListener('scroll', () => {
  const contactBubble = document.getElementById('apply');
  contactBubble.style.opacity = window.scrollY > 10 ? 1 : 0;
});

function App() {
  return (
    <div className="App" style={{ paddingTop: '6rem' }}>
      <div
        style={{
          position: 'fixed',
          left: '95vw',
          top: '95vh',
          transform: 'translate(-90%, -50%)',
          width: '100px',
          height: '40px',
          zIndex: 100,
        }}
      >
        <motion.button
          className="btn"
          onClick={() => document.getElementById('my_modal_2').showModal()}
          whileHover={{ scale: 1.1 }}
          whileTap={{
            scale: 0.9,
          }}
          id="apply"
          style={{
            backgroundColor: 'rgba(40, 40, 40, 1)',
            borderRadius: '15px',
            border: '2px solid rgb(50 50 50)',
            width: '100%',
            height: '100%',
            lineHeight: '40px',
            opacity: 0,
            transitionProperty: 'opacity',
            transitionDuration: '1.5s',
            zIndex: 100,
          }}
        >
          <div>Contact</div>
        </motion.button>
      </div>

      <Contact />

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
