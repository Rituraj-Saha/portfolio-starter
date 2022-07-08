import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/intro";
import './App.css'
import Services from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";
import Works from "./Components/Works/Works";
import Blogs from "./Components/Blogs/Blogs";
import { BrowserRouter, Routes, Route, Outlet, Link, Router, HashRouter} from "react-router-dom";
import Portfolio from "./Components/Portfolio/Portfolio";
import Testimoinal from "./Components/Testimonials/Testimoinal";
import Contact from "./Components/Contact/Contact";

function App() {
  return (

    <div className="App">

    
      <BrowserRouter>
        <Routes>
          <Route path='/portfolio' element={<>
            <Navbar />
            <Intro />
            <Services />
            <Experience />
            <Works />
            <Portfolio/>
            <Testimoinal/>
            <Contact/>
          </>} />
          <Route path="Blogs" element={<Blogs />} />
        </Routes>
      </BrowserRouter>
    
    </div>

  );
}

export default App;
