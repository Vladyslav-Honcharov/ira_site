import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./App.scss";
import Home from "./pages/Home/Home";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Appointment from "./pages/Appointment/Appointment";
import Contact from "./pages/Contact/Contact";
import Feedback from "./pages/Feedback/Feedback";
import Portfolio from "./pages/Portfolio/Portfolio";
import Price from "./pages/Price/Price";

function App() {
  return (
    <Router>
      <Header />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Appointment" element={<Appointment />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Feedback" element={<Feedback />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Price" element={<Price />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
