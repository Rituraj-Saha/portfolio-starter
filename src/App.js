import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/intro";
import './App.css'
import Services from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";
import Works from "./Components/Works/Works";
import Blogs from "./Components/Blogs/Blogs";
import { BrowserRouter, Routes, Route, Outlet, Link, Router, HashRouter,Navigate } from "react-router-dom";
import Portfolio from "./Components/Portfolio/Portfolio";
import Testimoinal from "./Components/Testimonials/Testimoinal";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

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
              <Portfolio />
              <Testimoinal />
              <Contact />
              <Footer />
            </>} />
            <Route path="Blogs" element={<Blogs />} />

            <Route path="*" element={<Navigate to="http://localhost:8080/portfolio/" replace={true} />} />


          </Routes>
        
      </BrowserRouter>

    </div>

  );
}

export default App;
