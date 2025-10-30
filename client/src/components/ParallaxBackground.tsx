import { useEffect, useRef } from 'react';
import reefBg1 from '@assets/FE170C9E-837E-466F-B469-84A2E5E12808_1761305321893.png';
import reefBg2 from '@assets/89F3EBD2-FAB8-4D99-AA3A-FFB59B7F7B70_1761305321893.png';
import reefBg3 from '@assets/36CADC6C-D1E8-4E8D-ACCC-E3E3BBF6C166_1761305321893.png';

export default function ParallaxBackground() {
  const layer1Ref = useRef<HTMLDivElement>(null);
  const layer2Ref = useRef<HTMLDivElement>(null);
  const layer3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Create rhythmic up/down oscillation using sine waves
      // Different frequencies for each layer create depth
      const oscillation1 = Math.sin(scrollY * 0.002) * 30;
      const oscillation2 = Math.sin(scrollY * 0.003) * 50;
      const oscillation3 = Math.sin(scrollY * 0.004) * 70;
      
      if (layer1Ref.current) {
        layer1Ref.current.style.transform = `translateY(${scrollY * 0.15 + oscillation1}px)`;
      }
      if (layer2Ref.current) {
        layer2Ref.current.style.transform = `translateY(${scrollY * 0.25 + oscillation2}px)`;
      }
      if (layer3Ref.current) {
        layer3Ref.current.style.transform = `translateY(${scrollY * 0.35 + oscillation3}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div
        ref={layer1Ref}
        className="absolute inset-0 will-change-transform"
        style={{
          backgroundImage: `url(${reefBg1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div
        ref={layer2Ref}
        className="absolute inset-0 will-change-transform"
        style={{
          backgroundImage: `url(${reefBg2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.7,
        }}
      />
      <div
        ref={layer3Ref}
        className="absolute inset-0 will-change-transform"
        style={{
          backgroundImage: `url(${reefBg3})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.5,
        }}
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/60" />
    </div>
  );
}
