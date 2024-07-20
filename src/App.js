import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import Home from "./components/Home";
import Members from "./components/Members";
import Partners from "./components/Partners";
import Buy from "./components/Buy";
import Footer from "./components/Footer";

window.addEventListener("scroll", () => {
  // console.log(window.scrollY);
});

function App() {
  return (
    <div className="App" style={{ paddingTop: "6rem" }}>
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
