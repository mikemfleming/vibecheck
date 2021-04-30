import { useState, useEffect } from 'react'

export default function useDocumentScrollThrottled(callback) {
    const [, setScrollPosition] = useState(0);
    let previousScrollTop = 0;
  
    function handleDocumentScroll() {
      const { scrollTop: currentScrollTop } = document.documentElement || document.body;
  
      setScrollPosition(previousPosition => {
        previousScrollTop = previousPosition;
        return currentScrollTop;
      });
  
      callback({ previousScrollTop, currentScrollTop });
    }

    useEffect(() => {
        window.addEventListener('scroll', handleDocumentScroll);
        
        return () =>
          window.removeEventListener('scroll', handleDocumentScroll);
      }, []);
  }