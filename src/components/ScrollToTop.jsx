import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const content = document.querySelector('.content-scroll'); // Target the right content area
    if (content) {
      content.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
