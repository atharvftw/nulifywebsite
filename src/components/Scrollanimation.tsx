import { useState, useEffect, useRef } from 'react';
import guiimg from '../assets/gui.jpg';

export const NulifyInterface = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [opacity, setOpacity] = useState(0);
  const imageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollThreshold = 300; // Adjust this threshold for where you want visibility to start
      const fadeEnd = 800; // Adjust this threshold for where full visibility is achieved

      // Calculate opacity based on scroll position
      if (scrollY >= scrollThreshold && scrollY <= fadeEnd) {
        const newOpacity = (scrollY - scrollThreshold) / (fadeEnd - scrollThreshold);
        setOpacity(newOpacity);
      } else if (scrollY > fadeEnd) {
        setOpacity(1); // Stay fully visible after fadeEnd point
      } else {
        setOpacity(0); // Invisible before scrollThreshold
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 } // 20% of the element is visible
    );

    const section = imageRef.current;
    if (section) {
      observer.observe(section);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section
      ref={imageRef}
      className="w-full py-12 min-h-screen bg-gradient-to-b from-transparent via-secondary to-background"
    >
      <div className="container mx-auto px-4">
        <div
          className={`transition-opacity duration-1000 ease-in-out ${isVisible ? '' : 'opacity-0'}`}
          style={{ opacity }} // Dynamically updating opacity based on scroll
        >
          <div className="relative max-w-[1200px] mx-auto h-[600px] bg-black rounded-lg shadow-lg overflow-hidden">
            {/* Gradient border effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[hsl(210,100%,50%)] via-black to-[hsl(210,100%,50%)] rounded-lg p-1 z-0"></div>
            
            {/* Main Image content */}
            <div className="relative w-full h-full bg-card rounded-lg shadow-lg overflow-hidden">
              <img
                src={guiimg}
                alt="NULIFY Dashboard"
                className="w-full h-full object-contain z-10 rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NulifyInterface;
