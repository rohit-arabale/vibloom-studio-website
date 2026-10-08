import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import ScrollManager from "@/components/ScrollManager";

const Layout = () => (
  <div className="flex min-h-screen flex-col">
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-brand-500 focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-ink-950"
    >
      Skip to main content
    </a>
    <ScrollManager />
    <Navbar />
    <main id="main-content" className="flex-1">
      <Outlet />
    </main>
    <Footer />
    <FloatingContact />
  </div>
);

export default Layout;
