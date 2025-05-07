
import Favorites from "./pages/Favorites";
import Home from "./pages/Home"
import {Routes, Route} from "react-router-dom";


function App() {
 

  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
      </main>
  )
}

export default App;