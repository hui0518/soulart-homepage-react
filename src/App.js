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

import styled from 'styled-components';

const Div = styled.div`
  --arvo: Arvo, 'Noto Sans KR', sans-serif;
  --sans: 'Noto Sans KR', sans-serif;

  font-family: var() (--sans);
`;

function App() {
  return (
    <Div className="App">
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
    </Div>
  );
}

export default App;
