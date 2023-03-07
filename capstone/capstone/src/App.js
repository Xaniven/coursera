import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Book from "./pages/Book";
import { Routes, Route } from "react-router-dom";
import Menu from "./pages/Menu";

function App() {
  return (
    <div className='App overflow-hidden'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/book' element={<Book />} />
        <Route path='/menu' element={<Menu />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
