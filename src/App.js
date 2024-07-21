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
  const a = document.getElementById('apply');

  if (window.scrollY > 10) {
    a.style.opacity = 1;
  } else {
    a.style.opacity = 0;
  }
});

function App() {
  return (
    <div className="App" style={{ paddingTop: '6rem' }}>
      <motion.button
        className="btn"
        onClick={() => document.getElementById('my_modal_2').showModal()}
        whileHover={{ scale: 1.1 }}
        whileTap={{
          scale: 0.9,
        }}
        id="apply"
        style={{
          position: 'fixed',
          left: '90vw',
          bottom: '20px',
          backgroundColor: 'rgb(30, 30, 30)',
          borderRadius: '10px',
          width: '100px',
          height: '40px',
          lineHeight: '40px',
          opacity: 0,
          transitionProperty: 'opacity',
          transitionDuration: '1.5s',
        }}
      >
        <div>contact</div>
      </motion.button>

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
