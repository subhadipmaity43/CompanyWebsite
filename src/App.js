import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUsMain from "./Pages/AboutUsMain";
import ContactUs from "./Pages/ContactUs";
import Careers from "./Pages/Careers";
import Devescops from "./components/Devescops";
import Data from "./components/Data";
import Kubernets from "./components/Kubernets";
import SecurityOurService from "./components/SecurityOurService";
import Blogmain from "./components/Blogmain";
import Blogcon from "./components/Blogcon";
function App() {
  return (
    <>
      <Router>
        <>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<AboutUsMain />} />
            <Route exact path="/career" element={<Careers />} />
            <Route exact path="/contact" element={<ContactUs />} />
            <Route exact path="/devsecops" element={<Devescops />} />
            <Route exact path="/dataEngineering" element={<Data />} />
            <Route exact path="/Kubernetes" element={<Kubernets />} />
            <Route exact path="/security" element={<SecurityOurService />} />
            <Route exact path="/blog" element={<Blogmain />} />
            <Route exact path="/blog/blogcon/:id" element={<Blogcon />} />
          </Routes>
        </>
      </Router>
    </>
  );
}
export default App;
