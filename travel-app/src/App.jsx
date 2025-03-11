
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Header from "./components/Header";

import Footer from "./components/Footer";

import TourDetail from "./pages/TourDetail";
import Payment from "./pages/Payment.jsx";
import OrderHistory from "./pages/OrderHistory.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css";
// import Footer from "./components/Footer";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import { BookingProvider } from "./components/BookingContext";

function App() {
  return (
    <BookingProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tour/:id" element={<TourDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/payment/:id" element={<Payment />} />
          <Route path="/OrderHistory" element={<OrderHistory />} />
        </Routes>
        <Footer />
      </Router>
    </BookingProvider>
   
  );
}

export default App;

