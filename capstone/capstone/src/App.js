import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Book from "./pages/Book";

function App() {
  return (
    <div className='App overflow-x-hidden'>
      <Navbar />
      <Home />
      <Book />
      <Footer />
    </div>
  );
}

export default App;
