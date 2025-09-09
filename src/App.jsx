

import { Route, Routes } from 'react-router-dom'
import './App.css'

function App() {


  return (
   <div className="min-h-screen flex flex-col bg-black text-white">
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
