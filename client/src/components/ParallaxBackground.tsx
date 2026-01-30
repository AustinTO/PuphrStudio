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
      
      // Seaweed sway: horizontal oscillation with slight counter-rotation per layer
      const sway1 = Math.sin(scrollY * 0.0025) * 70;
      const sway2 = Math.sin(scrollY * 0.0035 + Math.PI / 3) * -90;
      const sway3 = Math.sin(scrollY * 0.0045 + Math.PI / 2) * 110;
      const drift1 = Math.cos(scrollY * 0.0018) * 12;
      const drift2 = Math.cos(scrollY * 0.0022 + Math.PI / 4) * -16;
      const drift3 = Math.cos(scrollY * 0.0026 + Math.PI / 6) * 20;
      const rotate1 = Math.sin(scrollY * 0.0022) * 2.8;
      const rotate2 = Math.sin(scrollY * 0.0028 + Math.PI / 5) * -3.6;
      const rotate3 = Math.sin(scrollY * 0.0032 + Math.PI / 7) * 4.6;
      const zoom = Math.max(0, Math.min(1, scrollY / 900));
      const scaleBase = 1.12 - (0.03 * zoom);
      const scale1 = scaleBase;
      const scale2 = scaleBase + 0.01;
      const scale3 = scaleBase + 0.02;
      
      if (layer1Ref.current) {
        layer1Ref.current.style.transform = `translate(${sway1}px, ${drift1}px) rotate(${rotate1}deg) scale(${scale1})`;
      }
      if (layer2Ref.current) {
        layer2Ref.current.style.transform = `translate(${sway2}px, ${drift2}px) rotate(${rotate2}deg) scale(${scale2})`;
      }
      if (layer3Ref.current) {
        layer3Ref.current.style.transform = `translate(${sway3}px, ${drift3}px) rotate(${rotate3}deg) scale(${scale3})`;
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
