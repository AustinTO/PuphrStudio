import { useEffect, useState } from 'react';
import reefBg1 from '@assets/FE170C9E-837E-466F-B469-84A2E5E12808_1761305321893.png';
import reefBg2 from '@assets/89F3EBD2-FAB8-4D99-AA3A-FFB59B7F7B70_1761305321893.png';
import reefBg3 from '@assets/36CADC6C-D1E8-4E8D-ACCC-E3E3BBF6C166_1761305321893.png';

const backgrounds = [reefBg1, reefBg2, reefBg3];

export default function ParallaxBackground() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      const newIndex = Math.min(
        Math.floor(scrollY / (windowHeight * 0.8)),
        backgrounds.length - 1
      );
      
      setActiveIndex(newIndex);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {backgrounds.map((bg, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-opacity duration-1500 ease-in-out"
          style={{
            opacity: activeIndex === index ? 1 : 0,
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background/80" />
    </div>
  );
}
