
import { MovieProvider } from "./components/contexts/MovieContext";
import Navbar from "./components/Navbar";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home"
import { Routes, Route } from "react-router-dom"


function App() {


  return (

    <MovieProvider>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>

    </MovieProvider>

  )
}

export default App; 
