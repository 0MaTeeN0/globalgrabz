import { useEffect, Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router";
import Home from "./pages/Home";
const Track = lazy(() => import("./pages/Track"));
import Seo from "./components/Seo";
const ListPage = lazy(() => import("./pages/Pages").then((m) => ({ default: m.ListPage })));
const DetailPage = lazy(() => import("./pages/Pages").then((m) => ({ default: m.DetailPage })));
const AboutPage = lazy(() => import("./pages/Pages").then((m) => ({ default: m.AboutPage })));
const ContactPage = lazy(() => import("./pages/Pages").then((m) => ({ default: m.ContactPage })));
const NotFound = lazy(() => import("./pages/Pages").then((m) => ({ default: m.NotFound })));
function ScrollToTop() { const { pathname } = useLocation(); useEffect(() => { window.scrollTo(0, 0); }, [pathname]); return null; }
export default function App() { return (<><ScrollToTop /><Suspense fallback={null}><Routes><Route path="/" element={<><Seo title="China Sourcing Agent for Global Buyers | Global Grabz" description="Global Grabz is a China sourcing agent. We find factories, verify suppliers, inspect quality and ship to the USA, Europe, Australia, Asia and the Middle East." path="/" /><Home /></>} /><Route path="/services" element={<ListPage kind="services" />} /><Route path="/services/:slug" element={<DetailPage kind="services" />} /><Route path="/markets" element={<ListPage kind="markets" />} /><Route path="/markets/:slug" element={<DetailPage kind="markets" />} /><Route path="/sourcing" element={<ListPage kind="sourcing" />} /><Route path="/sourcing/:slug" element={<DetailPage kind="sourcing" />} /><Route path="/about" element={<AboutPage />} /><Route path="/contact" element={<ContactPage />} /><Route path="/track" element={<Track />} /><Route path="*" element={<NotFound />} /></Routes></Suspense></>); }
  
