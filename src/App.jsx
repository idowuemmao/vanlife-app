import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/VanLife/Home";
import About from "./pages/VanLife/About";
import Van from "./pages/VanLife/Van";
import VanDetails from "./pages/VanLife/VanDetail";
import Layout from './components/Layout'
import Host from './components/Host'
import Dashboard from "./pages/Host/Dashboard";
import Review from "./pages/Host/Review";
import Income from "./pages/Host/Income";
import Photos from "./pages/Host/Photos";
import Pricing from "./pages/Host/Pricing";
import Details from "./pages/Host/Details";
import VanHost from "./pages/Host/VanHost";
import VanHostDetails from "./pages/Host/VanHostDetails";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Van />} />
          <Route path="vans/:name" element={<VanDetails />} />

          <Route path="host" element={<Host/>} >
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Review />} />
            <Route path="vans" element={<VanHost/>} />
            <Route path="vans/:name" element={<VanHostDetails/>}>
              <Route index element={<Details/>} />
              <Route path="pricing" element={<Pricing/>}/>
              <Route path="photos" element={<Photos/>}/>
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
