import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import reefBg1 from '@assets/FE170C9E-837E-466F-B469-84A2E5E12808_1761305321893.png';
import reefBg2 from '@assets/89F3EBD2-FAB8-4D99-AA3A-FFB59B7F7B70_1761305321893.png';
import reefBg3 from '@assets/36CADC6C-D1E8-4E8D-ACCC-E3E3BBF6C166_1761305321893.png';

gsap.registerPlugin(ScrollTrigger);

export default function ParallaxBackground() {
  const rootRef = useRef<HTMLDivElement>(null);
  const layer1Ref = useRef<HTMLDivElement>(null);
  const layer2Ref = useRef<HTMLDivElement>(null);
  const layer3Ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    const layer1 = layer1Ref.current;
    const layer2 = layer2Ref.current;
    const layer3 = layer3Ref.current;

    if (!root || !layer1 || !layer2 || !layer3) {
      return;
    }

    const context = gsap.context(() => {
      const media = gsap.matchMedia();

      media.add('(prefers-reduced-motion: reduce)', () => {
        gsap.set([layer1, layer2, layer3], {
          clearProps: 'transform',
        });
      });

      media.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.set([layer1, layer2, layer3], {
          force3D: true,
          scale: 1.14,
          transformOrigin: '50% 50%',
          willChange: 'transform',
        });

        const timeline = gsap.timeline({
          defaults: {
            ease: 'none',
            overwrite: 'auto',
          },
          scrollTrigger: {
            trigger: document.documentElement,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1.15,
            invalidateOnRefresh: true,
          },
        });

        timeline
          .to(layer1, { x: 62, y: -18, rotation: 2.4, scale: 1.1 }, 0)
          .to(layer2, { x: -78, y: 22, rotation: -3.2, scale: 1.12 }, 0)
          .to(layer3, { x: 94, y: -34, rotation: 4, scale: 1.15 }, 0);

        return () => {
          timeline.kill();
        };
      });

      return () => {
        media.revert();
      };
    }, root);

    return () => {
      context.revert();
    };
  }, []);

  return (
    <div ref={rootRef} className="fixed inset-0 -z-10 overflow-hidden">
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
