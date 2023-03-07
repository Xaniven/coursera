import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Book from "./pages/Book";

function App() {
  return (
    <div className='App overflow-hidden'>
      <Navbar />
      <Home />
      <Book />
      <Footer />
    </div>
  );
}

export default App;
