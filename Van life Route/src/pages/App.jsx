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
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link, useSearchParams } from "react-router-dom";
import Home from "./Home.jsx"
import About from "./About.jsx"
import Vans from "./Vans/Vans.jsx"
import"../../server.js"
import VanDetail from "./Vans/VanDetails.jsx"
import Layout from "../../components/Layout.jsx"
import Dashboard from "./Host/Dashboard.jsx"
import Income from "./Host/Income.jsx"
import Reviews from "./Host/Reviews.jsx"
import HostLayout from "../../components/HostLayout.jsx"
import HostVanDetail from "./Host/HostVanDetail.jsx";
import HostVanInfo from "./Host/HostVanInfo.jsx"
import HostVanPricing from "./Host/HostVanPricing.jsx"
import HostVanPhotos from "./Host/HostVanPhotos.jsx"
import HostVans from "./Host/HostVans.jsx";


function App() {

  return (

    // Renders components
    <BrowserRouter>
       <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />
          <Route path="login" element={<Login />} />

            <Route element={<AuthRequired />}>
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<HostVans />} />
            <Route index element={<HostVanInfo />} />
            <Route path="pricing" element={<HostVanPricing />} />
            <Route path="vans/:id" element={<HostVanDetail />} />
            <Route path="pricing" element={<HostVanPricing />} />
            <Route path="photos" element={<HostVanPhotos />} />
          </Route>
          </Route> 
          </Route>
      </Routes> 
    </BrowserRouter>
  )
}

export default App
