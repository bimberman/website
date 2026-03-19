import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Home3D from "./pages/Home3D";
import HomeNormal from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home-3d" element={<Home3D />} />
          <Route path="/*" element={
            <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col">
              <Navbar />
              <main className="flex-1">
                <Routes>
                  <Route path="/home" element={<HomeNormal />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </main>
              <Footer />
            </div>
          } />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
