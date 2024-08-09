import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer";
import Clients from "./components/Clients";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import { loadSchema } from "./hooks/loadSchema";
import { loadGTM } from "./hooks/loadGtm";
import { loadTawkTo } from "./hooks/loadTawkTo";
import { loadAOS } from "./hooks/loadAOS";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Videogallery from "./pages/Videogallery";
import Twopost from "./pages/TwoPost";
import Fourpost from "./pages/Fourpost";
import Puzzleparking from "./pages/Puzzleparking";
import Shuttleparking from "./pages/Shuttleparking";
import Towerparking from "./pages/Towerparking";
import Bikeparking from "./pages/Bikeparking";
import ASRS from "./pages/ASRS";
import Carelevator from "./pages/Carelevator";
import BackToTopButton from "./components/BackToTopButton";
import VerticalRotary from "./pages/VerticalRotary";
import Carrers from "./pages/Carrers";
import HorizontalRotaryParking from "./pages/HorizontalRotaryParking";
import FrequentlyAskedQuestion from "./pages/FrequentlyAskedQuestion";
import Landing from "./pages/Landing";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Blog from "./pages/Blog";
import BlogFullPage from "./components/Blog/BlogFullPage";

const MainLayout = () => (
  <div>
    <Navbar />
    <Outlet />
    <Clients />
    <BackToTopButton />
    <Footer />
  </div>
);

const NoNavbarLayout = () => (
  <div>
    <Outlet />
  </div>
);

function App() {

  const handleLoadScripts = () => {
    loadAOS();
    loadTawkTo();
    loadGTM("GTM-MQWJBKFX");
    loadSchema();
  };

 setTimeout(handleLoadScripts, 3000);

  return (
    <HelmetProvider>
      <BrowserRouter basename="/">
        <ScrollToTop />
        <React.Suspense fallback={<div />}>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<About />} />
              <Route path="/two-post-hydraulic-system" element={<Twopost />} />
              <Route
                path="/four-post-hydraulic-system"
                element={<Fourpost />}
              />
              <Route
                path="/puzzle-parking-system"
                element={<Puzzleparking />}
              />
              <Route
                path="/stacker-parking-system"
                element={<Shuttleparking />}
              />
              <Route path="/tower-parking-system" element={<Towerparking />} />
              <Route
                path="/horizontal-rotary-parking"
                element={<HorizontalRotaryParking />}
              />
              <Route
                path="/vertical-rotary-parking"
                element={<VerticalRotary />}
              />
              <Route path="/bike-parking" element={<Bikeparking />} />
              <Route
                path="/automated-stoarge-retrival-system"
                element={<ASRS />}
              />
              <Route path="/car-elevator" element={<Carelevator />} />

              <Route path="/blog">
                <Route index element={<Blog />} />
                <Route path=":slug" element={<BlogFullPage />} />
              </Route>
              <Route
                path="/frequently-asked-question"
                element={<FrequentlyAskedQuestion />}
              />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/videos" element={<Videogallery />} />
              <Route path="/careers" element={<Carrers />} />
              <Route path="/contact-us" element={<Contact />} />
            </Route>
            <Route element={<NoNavbarLayout />}>
              <Route path="/landing" element={<Landing />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </React.Suspense>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
