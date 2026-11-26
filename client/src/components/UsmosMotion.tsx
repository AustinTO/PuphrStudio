import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

// Original scripted Usmos companion-site scene (WebHeroOrbits / WebHeroOrbitsSM).
// Keep the renderer and WASM local to Studio; load only when the showcase is visible.
export default function UsmosMotion() {
  const stage = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const [visible, setVisible] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setEnabled(!preference.matches);
    sync();
    preference.addEventListener("change", sync);
    if (!stage.current || !("IntersectionObserver" in window)) {
      setVisible(true);
      return () => preference.removeEventListener("change", sync);
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) setReady(false);
      setVisible(entry.isIntersecting);
    }, { threshold: 0.1 });
    observer.observe(stage.current);
    return () => {
      observer.disconnect();
      preference.removeEventListener("change", sync);
    };
  }, []);

  useEffect(() => {
    if (!visible || !enabled || failed || !canvas.current) return;
    let disposed = false;
    let instance: import("@rive-app/webgl2").Rive | undefined;
    let resize: ResizeObserver | undefined;
    const surface = canvas.current;
    setReady(false);
    const fail = () => {
      if (!disposed) {
        setReady(false);
        setFailed(true);
      }
    };
    void Promise.all([
      import("@rive-app/webgl2"),
      import("@rive-app/webgl2/rive.wasm?url"),
      import("@rive-app/webgl2/rive_fallback.wasm?url"),
    ]).then(([runtime, wasm, fallback]) => {
      if (disposed) return;
      runtime.RuntimeLoader.setWasmUrl(wasm.default);
      runtime.RuntimeLoader.setWasmFallbackUrl(fallback.default);
      instance = new runtime.Rive({
        src: "/media/products/usmos-hero-orbits.riv",
        canvas: surface,
        artboard: "WebHeroOrbits",
        stateMachines: "WebHeroOrbitsSM",
        autoplay: true,
        autoBind: true,
        layout: new runtime.Layout({ fit: runtime.Fit.Contain, alignment: runtime.Alignment.Center }),
        onLoad: () => {
          if (disposed) return;
          instance?.resizeDrawingSurfaceToCanvas(Math.min(window.devicePixelRatio || 1, 2));
          setReady(true);
        },
        onLoadError: fail,
      });
      if ("ResizeObserver" in window) {
        resize = new ResizeObserver(() => instance?.resizeDrawingSurfaceToCanvas(Math.min(window.devicePixelRatio || 1, 2)));
        resize.observe(surface);
      }
    }).catch(fail);
    return () => {
      disposed = true;
      resize?.disconnect();
      instance?.cleanup();
    };
  }, [visible, enabled, failed]);

  const playing = enabled && visible && ready && !failed;
  return (
    <figure data-usmos-rive-card className="relative h-[260px] min-w-0 overflow-hidden rounded-t-[1.5rem] border-b border-white/10 bg-[#151328]">
      <div ref={stage} className="relative h-full w-full" style={{background:"radial-gradient(ellipse at 50% 35%, #342341, #151328 75%)"}}>
        <img src="https://usmos.app/assets/theme_inner_world.webp" alt="Usmos illustrated inner world theme" loading="lazy" decoding="async" referrerPolicy="no-referrer" className={`absolute inset-0 h-full w-full object-contain p-3 ${playing ? "opacity-0" : "opacity-100"}`}/>
        <canvas ref={canvas} aria-hidden="true" className={`absolute inset-0 h-full w-full touch-pan-y ${playing ? "opacity-100" : "pointer-events-none opacity-0"}`}/>
      </div>
      <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 bg-gradient-to-t from-black/80 to-transparent px-3 pb-3 pt-8">
        <div className="min-w-0 text-white">
          <p className="text-[10px] font-semibold uppercase tracking-[.16em] text-[#e5c9fb]">Interactive Rive experience</p>
          <p className="mt-1 text-xs text-white/80">{playing ? "Move or touch to explore" : failed ? "Original Usmos artwork" : enabled ? "Original Usmos motion" : "Motion paused"}</p>
        </div>
        {!failed && <button type="button" aria-label={enabled ? "Pause Usmos animation" : "Play Usmos animation"} title={enabled ? "Pause motion" : "Play motion"} onClick={() => {setReady(false); setEnabled(value => !value);}} className="pointer-events-auto inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/25 bg-black/60 text-white hover:bg-black/85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white">
          {enabled ? <Pause size={16} aria-hidden="true"/> : <Play size={16} aria-hidden="true"/>}
        </button>}
      </figcaption>
    </figure>
  );
}
