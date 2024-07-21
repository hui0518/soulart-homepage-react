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
import styled from 'styled-components';

window.addEventListener('scroll', () => {
  const contactBubble = document.getElementById('apply');
  contactBubble.style.opacity = window.scrollY > 10 ? 1 : 0;
});

const AppDiv = styled.div`
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  text-align: center;
  padding-top: 6rem;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  img {
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
  }
`;

function App() {
  return (
    <AppDiv>
      <Contact />

      <ContactBubble />

      <Header />

      <Home />

      <About />

      <Members />

      <Partners />

      <Buy />

      <Footer />
    </AppDiv>
  );
}

export default App;
