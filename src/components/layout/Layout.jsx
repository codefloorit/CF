import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BackToTop from "../common/BackToTop";
import FloatingButtons from "../common/FloatingButtons";
import ScrollToTop from "../common/ScrollToTop";
import ScrollProgressBar from "../common/ScrollProgressBar";
import CookieConsent from "../common/CookieConsent";
import CustomCursor from "../common/CustomCursor";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-primary">
      <CustomCursor />
      <ScrollToTop />
      <ScrollProgressBar />
      <Navbar />
      <main className="flex-1 pt-[96px]">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
      <FloatingButtons />
      <CookieConsent />
    </div>
  );
};

export default Layout;
