import './App.css';
import About from './components/About';
import Header from './components/Header';
import Home from './components/Home';
import Members from './components/Members';
import Partners from './components/Partners';
import Buy from './components/Buy';
import Footer from './components/Footer';
import { motion } from 'framer-motion';

window.addEventListener('scroll', () => {
  const a = document.getElementById('apply');

  // console.log(window.scrollY);
  if (window.scrollY > 10) {
    a.style.opacity = 1;
  } else {
    a.style.opacity = 0;
  }
});

function App() {
  return (
    <div className="App" style={{ paddingTop: '6rem' }}>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{
          scale: 0.9,
        }}
        id="apply"
        style={{
          position: 'fixed',
          right: '10px',
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
      </motion.div>

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
