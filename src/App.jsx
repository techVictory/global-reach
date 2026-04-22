import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ShortTermMissions from './pages/ShortTermMissions'
import SpecialProjects from './pages/SpecialProjects'
import Missionaries from './pages/Missionaries'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/missions" element={<ShortTermMissions />} />
          <Route path="/special-projects" element={<SpecialProjects />} />
          <Route path="/missionaries" element={<Missionaries />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App