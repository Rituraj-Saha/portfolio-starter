import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/intro";
import './App.css'
import Services from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";
import Works from "./Components/Works/Works";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Services/>
      <Experience/>
      <Works/>
    </div>
  );
}

export default App;
