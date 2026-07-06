import { useEffect, useState } from "react";
import logo from "@/assets/kgc-logo.jpeg";

export function BrandLoader() {
  const [hidden, setHidden] = useState(false);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const t1 = window.setTimeout(() => setFade(true), 1900);
    const t2 = window.setTimeout(() => setHidden(true), 2500);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-white transition-opacity duration-[600ms] ${
        fade ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="relative w-[78vw] max-w-[520px] aspect-[3/2] overflow-hidden">
        <img
          src={logo}
          alt="Khomba Group of Companies"
          className="absolute inset-0 h-full w-full object-contain"
        />
        {/* gold light sweep */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -inset-y-10 -left-1/3 w-1/2 rotate-[18deg] gold-sweep" />
        </div>
      </div>
    </div>
  );
}
