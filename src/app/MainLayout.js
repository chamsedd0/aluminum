'use client'

// app/MainLayout.js
import { useState, useEffect } from 'react';
import LoadingScreen from './LoadingScreen';

export default function MainLayout({ children, fontClass }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setIsLoading(false);

    

    // Check if document is already loaded
    if (document.readyState === 'complete') {
      setIsLoading(false);
    } else {
      // Add event listeners for load and DOMContentLoaded
      window.addEventListener('load', handleLoad);
      document.addEventListener('DOMContentLoaded', handleLoad);

      // Set a timeout as a fallback in case events don't fire
      const timeoutId = setTimeout(() => setIsLoading(false), 5000);

      // Clean up event listeners and timeout
      return () => {
        window.removeEventListener('load', handleLoad);
        document.removeEventListener('DOMContentLoaded', handleLoad);
        clearTimeout(timeoutId);
      };
    }
  }, []);

  return (
    <div className={fontClass}>
      {isLoading ? <LoadingScreen /> : children}
    </div>
  );
}
