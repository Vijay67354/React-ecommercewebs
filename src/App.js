import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Blog from "./component/Blog";
import Contact from "./component/Contact";
// import NoPage from "./component/NoPage";
import Navbar from "./component/Navbar";
import Banner from "./component/Banner";
import Sales from "./component/Sales";
import Slider from "./component/Slider";
import Smartslider from "./component/Smartslider";
import Consumer from "./component/Consumer";
import Smartslidere from "./component/SmartSlidere";
import Subscribe from "./component/Subscribe";
import Footer from './component/Footer';

function App() {
    return ( 
      
        <BrowserRouter>
        
      <Routes>
        <Route>
          <Route/>
         
          <Route path="/" element={<Home/>} />
          <Route path="About" element={<About/>} />
          <Route path="Blog" element={<Blog />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Navbar" element={<Navbar />} />
          <Route path="Banner" element={<Banner />} />
          <Route path="Sales" element={<Sales />} />
          <Route path="Slider" element={<Slider />} />
          <Route path="Smartslider" element={<Smartslider />} />
          <Route path="Consumer" element={<Consumer />} />
          <Route path="SmartSlidere" element={<Smartslidere />} />
          <Route path="Subscribe" element={<Subscribe />} />
          <Route path="Footer" element={<Footer />} />
        </Route>
      </Routes>
      
    </BrowserRouter>
);
}

export default App