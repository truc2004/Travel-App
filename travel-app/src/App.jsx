
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Header from "./components/Header";
<<<<<<< HEAD
import Footer from "./components/Footer";
=======
import TourDetail from "./pages/TourDetail";
import "@fortawesome/fontawesome-free/css/all.min.css";
// import Footer from "./components/Footer";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card } from "react-bootstrap";
>>>>>>> Quy

function App() {
  console.log("chay")
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
<<<<<<< HEAD
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
=======
        <Route path="/tour/:id" element={<TourDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
>>>>>>> Quy
    </Router>
  );
}

export default App;

