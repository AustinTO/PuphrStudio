import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Pause, Play } from "lucide-react";

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
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.1 });
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
    <figure className="min-w-0 overflow-hidden rounded-[1.25rem] border border-white/10 bg-background/65">
      <div ref={stage} className="relative mx-auto aspect-square max-w-[300px] overflow-hidden">
        <img src="https://usmos.app/assets/theme_inner_world.webp" alt="" loading="lazy" decoding="async" className={`absolute inset-0 h-full w-full object-cover ${playing ? "opacity-0" : "opacity-100"}`}/>
        <canvas ref={canvas} aria-hidden="true" className={`absolute inset-0 h-full w-full touch-pan-y ${playing ? "opacity-100" : "pointer-events-none opacity-0"}`}/>
      </div>
      <figcaption className="border-t border-white/10 p-4 sm:p-5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="text-xs font-semibold uppercase tracking-[.18em] text-primary">Live motion · Rive</p>
          {!failed && <button type="button" onClick={() => {setReady(false); setEnabled(value => !value);}} className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 px-3 text-xs font-semibold hover:border-primary/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary">
            {enabled ? <Pause size={14} aria-hidden="true"/> : <Play size={14} aria-hidden="true"/>}
            {enabled ? "Pause motion" : "Play motion"}
          </button>}
        </div>
        <p className="mt-2 text-sm leading-6 text-foreground/80">An original Usmos scene: twin galaxies, scripted orbital motion and pointer-responsive depth. {playing ? "Move your pointer or touch the scene to explore." : failed ? "Static artwork shown when live rendering is unavailable." : "Motion can be paused or enabled at any time."}</p>
        <a href="/products/usmos" className="mt-2 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary hover:underline">Explore Usmos <ArrowUpRight size={15} aria-hidden="true"/></a>
      </figcaption>
    </figure>
  );
}
