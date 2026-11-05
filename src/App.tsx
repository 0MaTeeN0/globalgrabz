import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router";
import Home from "./pages/Home";
import Track from "./pages/Track";
import Seo from "./components/Seo";
import { ListPage, DetailPage, AboutPage, ContactPage, NotFound } from "./pages/Pages";
function ScrollToTop() { const { pathname } = useLocation(); useEffect(() => { window.scrollTo(0, 0); }, [pathname]); return null; }
export default function App() { return (<><ScrollToTop /><Routes><Route path="/" element={<><Seo title="China Sourcing Agent for Global Buyers | Global Grabz" description="Global Grabz is a China sourcing agent. We find factories, verify suppliers, inspect quality and ship to the USA, Europe, Australia, Asia and the Middle East." path="/" /><Home /></>} /><Route path="/services" element={<ListPage kind="services" />} /><Route path="/services/:slug" element={<DetailPage kind="services" />} /><Route path="/markets" element={<ListPage kind="markets" />} /><Route path="/markets/:slug" element={<DetailPage kind="markets" />} /><Route path="/sourcing" element={<ListPage kind="sourcing" />} /><Route path="/sourcing/:slug" element={<DetailPage kind="sourcing" />} /><Route path="/about" element={<AboutPage />} /><Route path="/contact" element={<ContactPage />} /><Route path="/track" element={<Track />} /><Route path="*" element={<NotFound />} /></Routes></>); }
  
