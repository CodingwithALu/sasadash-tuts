import { AnimatePresence } from "motion/react";
import { Route, Routes, useLocation } from "react-router-dom";
import PageTransition from "../components/PageTransiton";
import HomePage from "@/feature/screen/home/homePage";
import CulturePage from "@/feature/screen/culture/culturePage";
import EventPage from "@/feature/screen/event/eventPage";
import SponsorsPage from "@/feature/screen/sponsors/sponsorsPage";
import FinancePage from "@/feature/screen/finance/finacePage";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location}>
        <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
        <Route path="/culture" element={<PageTransition><CulturePage /></PageTransition>} />
        <Route path="/event" element={<PageTransition><EventPage /></PageTransition>} />
        <Route path="/sponsors" element={<PageTransition><SponsorsPage /></PageTransition>} />
        <Route path="/finance" element={<PageTransition><FinancePage /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;