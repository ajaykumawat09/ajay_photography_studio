import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Page ko top par bhej deta hai
  }, [pathname]);

  return null; // Yeh component kuch dikhayega nahi, sirf kaam karega
};

export default ScrollToTop;