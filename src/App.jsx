import Fashion from "./Pages/Fashion";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Man from "./Components/Man";
import Women from "./Components/Women";
import Kids from "./Components/Kids";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="fashion" element={<Fashion />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="man" element={<Man />} />
        <Route path="women" element={<Women />} />
        <Route path="kids" element={<Kids />} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
