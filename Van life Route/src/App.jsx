/**
 * Challenge:
 * Bootstrap the VanLife project by creating the first 2 routes:
 * Home and About.
 * 
 * Also include the navbar that can link between the two routes.
 * For now, you'll either need to copy/paste the navbar code
 * to both Home and About pages, or you'll need to find a place
 * to put it where it can be shared between the two pages.
 * (Don't overthink this part - just do whatever is easiest for
 * you because we'll learn a better approach very soon)
 * 
 * Review challenge: do all the CSS yourself based on the design
 * linked in the slides.
 */
import React from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home.jsx"
import About from "./About.jsx"
import Vans from "./pages/Vans/Vans.jsx"
import"../server.js"
import VanDetail from "./pages/Vans/VanDetails.jsx"
import Layout from "../components/Layout.jsx"
import Dashboard from "./pages/Host/Dashboard.jsx"
import Income from "./pages/Host/Income.jsx"
import Reviews from "./pages/Host/Reviews.jsx"
import HostLayout from "../components/HostLayout.jsx"


function App() {

  return (
    <BrowserRouter>
       <Routes>
        <Route path="/" element={<Layout />}>
          
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          { <Route path="vans/:id" element={<VanDetail />} /> }
          
          {<Route path="host" element={<HostLayout />} />}
            { <Route index element={<Dashboard />} /> }
            { <Route path="income" element={<Income />} /> }
            { <Route path="reviews" element={<Reviews />} /> }
          </Route> 
      </Routes> 
    </BrowserRouter>
  )
}

export default App
