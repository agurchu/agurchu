import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Project from './pages/Project.jsx'
import About from './pages/About.jsx'
import Team from './pages/Team.jsx'
import Contact from './pages/Contact.jsx'
import Booking from './pages/Booking.jsx'

function App() {


  return (
   <div className="min-h-screen flex flex-col bg-primary-1 text-accent">
<ScrollToTop />
<Header />
<main className="flex-1">
<Routes>
<Route path="/" element={<Home />} />
<Route path="/services" element={<Services />} />
<Route path="/portfolio" element={<Portfolio />} />
<Route path="/portfolio/:slug" element={<Project />} />
<Route path="/about" element={<About />} />
<Route path="/team" element={<Team />} />
<Route path="/booking" element={<Booking />} />
<Route path="/contact" element={<Contact />} />
</Routes>
</main>
<Footer />
</div>
  )
}

export default App
