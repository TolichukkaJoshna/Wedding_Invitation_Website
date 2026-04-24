import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import ganesha from "@/assets/ganesha.png";

interface Props {
  onOpen: () => void;
}

const OpeningAnimation = ({ onOpen }: Props) => {
  const [sealBroken, setSealBroken] = useState(false);
  const [opening, setOpening] = useState(false);
  const [hidden, setHidden] = useState(false);

  const handleOpen = () => {
    if (sealBroken) return;
    setSealBroken(true);
    // After seal tears, wait briefly then open the book
    setTimeout(() => setOpening(true), 400);
    // After full book opening completes, reveal site
    setTimeout(() => {
      onOpen();
      setHidden(true);
    }, 1600);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") handleOpen();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line
  }, [sealBroken]);

  return (
    <AnimatePresence>
      {!hidden && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto px-3 py-6"
          style={{ background: "var(--gradient-soft)" }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Soft warm light overlay during opening (no dark shadows) */}
          <motion.div
            className="pointer-events-none absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: opening ? 1 : 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            style={{
              background:
                "radial-gradient(ellipse at center, hsl(var(--gold-light) / 0.25), transparent 65%)",
            }}
          />

          {/* Book container */}
          <div
            className="relative w-[min(96vw,820px)] h-[min(78vh,560px)] my-auto"
            style={{ perspective: "2000px" }}
          >
            {/* Inner reveal page (behind the two covers) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: opening ? 1 : 0, scale: opening ? 1 : 0.94 }}
              transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
              className="absolute inset-4 sm:inset-6 bg-ivory ornate-border rounded-sm flex flex-col items-center justify-center text-center px-6"
            >
              <img src={ganesha} alt="Ganesha" className="w-16 h-16 sm:w-20 sm:h-20 mb-3" width={512} height={512} />
              <p className="font-display text-maroon-deep text-base sm:text-xl tracking-wider">Srirasthu</p>
              <p className="font-display text-maroon-deep text-base sm:text-xl tracking-wider mt-1">Shubhamasthu</p>
              <p className="font-display text-maroon-deep text-base sm:text-xl tracking-wider mt-1">Avighnamasthu</p>
              <div className="gold-divider w-32 my-4" />
              <p className="font-script text-gold-deep text-3xl">Welcome</p>
            </motion.div>

            {/* Soft center crease (warm gold tint, NOT black) */}
            <motion.div
              className="pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 w-8 z-10"
              initial={{ opacity: 0.5 }}
              animate={{ opacity: opening ? 0 : 0.5 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              style={{
                background:
                  "linear-gradient(to right, transparent, hsl(var(--gold-deep) / 0.18), transparent)",
              }}
            />

            {/* LEFT COVER — opens outward to the LEFT */}
            <motion.div
              className="absolute inset-y-0 left-0 w-1/2"
              style={{ transformStyle: "preserve-3d", backfaceVisibility: "hidden", transformOrigin: "left center" }}
              initial={{ rotateY: 0 }}
              animate={{ rotateY: opening ? -165 : 0 }}
              transition={{ duration: 1.0, ease: "easeInOut" }}
            >
              <div className="h-full w-full bg-gradient-maroon shadow-card rounded-l-sm relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-2 border border-gold/40 rounded-l-sm" />
                <div className="absolute inset-4 border border-gold/20 rounded-l-sm" />
                <div
                  className="absolute inset-0 opacity-30 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(115deg, transparent 35%, hsl(var(--gold-light) / 0.35) 50%, transparent 65%)",
                  }}
                />
                <div className="relative z-10 text-center px-5 pr-12 sm:pr-20">
                  <p className="font-display tracking-[0.4em] text-gold-light/80 text-[9px] sm:text-[11px]">
                    WITH GOD&rsquo;S BLESSINGS
                  </p>
                  <div className="gold-divider w-16 mx-auto my-3 opacity-60" />
                  <p className="font-script text-gold-light text-3xl sm:text-5xl md:text-6xl drop-shadow-md leading-tight">
                    Sriramula&rsquo;s
                  </p>
                  <p className="font-script text-gold-light text-2xl sm:text-3xl md:text-4xl drop-shadow-md leading-tight mt-1">
                    Invitation
                  </p>
                </div>
              </div>
            </motion.div>

            {/* RIGHT COVER — opens outward to the RIGHT */}
            <motion.div
              className="absolute inset-y-0 right-0 w-1/2"
              style={{ transformStyle: "preserve-3d", backfaceVisibility: "hidden", transformOrigin: "right center" }}
              initial={{ rotateY: 0 }}
              animate={{ rotateY: opening ? 165 : 0 }}
              transition={{ duration: 1.0, ease: "easeInOut" }}
            >
              <div className="h-full w-full bg-gradient-maroon shadow-card rounded-r-sm relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-2 border border-gold/40 rounded-r-sm" />
                <div className="absolute inset-4 border border-gold/20 rounded-r-sm" />
                <div
                  className="absolute inset-0 opacity-30 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(245deg, transparent 35%, hsl(var(--gold-light) / 0.35) 50%, transparent 65%)",
                  }}
                />
                <div className="relative z-10 text-center px-5 pl-12 sm:pl-20">
                  <p className="font-display tracking-[0.35em] text-gold-light/80 text-[9px] sm:text-[11px]">
                    THE WEDDING OF
                  </p>
                  <div className="gold-divider w-16 mx-auto my-3 opacity-60" />
                  <p className="font-script text-gold-light text-3xl sm:text-5xl md:text-6xl drop-shadow-md leading-tight">
                    Alekhya
                  </p>
                  <p className="font-script text-gold-light/90 text-xl sm:text-2xl my-1">&amp;</p>
                  <p className="font-script text-gold-light text-3xl sm:text-5xl md:text-6xl drop-shadow-md leading-tight">
                    Sai Shiva
                  </p>
                </div>
              </div>
            </motion.div>

            {/* WAX SEAL — tears in two halves with a zig-zag crack */}
            <AnimatePresence>
              {!opening && (
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-20 h-20 sm:w-24 sm:h-24">
                  {/* Glow ring on break */}
                  <AnimatePresence>
                    {sealBroken && (
                      <motion.div
                        initial={{ scale: 0.6, opacity: 0.8 }}
                        animate={{ scale: 2.4, opacity: 0 }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        className="absolute inset-0 rounded-full"
                        style={{
                          background:
                            "radial-gradient(circle, hsl(var(--gold-light) / 0.7), transparent 70%)",
                        }}
                      />
                    )}
                  </AnimatePresence>

                  {/* LEFT HALF of the seal */}
                  <motion.button
                    onClick={handleOpen}
                    initial={{ scale: 0, rotate: -45, opacity: 0 }}
                    animate={
                      sealBroken
                        ? { x: -60, y: 10, rotate: -25, opacity: 0, scale: 0.9 }
                        : { scale: 1, rotate: 0, opacity: 1, x: 0, y: 0 }
                    }
                    exit={{ opacity: 0 }}
                    transition={
                      sealBroken
                        ? { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
                        : { delay: 0.6, type: "spring", stiffness: 220, damping: 14 }
                    }
                    whileHover={!sealBroken ? { scale: 1.05 } : undefined}
                    whileTap={!sealBroken ? { scale: 0.94 } : undefined}
                    aria-label="Open invitation"
                    className="absolute inset-0 cursor-pointer"
                    style={{
                      // Jagged zig-zag tear on the right edge of the left half
                      clipPath:
                        "polygon(0 0, 50% 0, 46% 8%, 54% 18%, 44% 28%, 52% 40%, 46% 52%, 54% 64%, 46% 76%, 52% 88%, 50% 100%, 0 100%)",
                    }}
                  >
                    <div className="w-full h-full rounded-full bg-gradient-gold shadow-gold border-2 border-ivory animate-glow-pulse flex items-center justify-end pr-3">
                      <span className="font-display tracking-widest text-maroon-deep text-[10px] sm:text-[12px] leading-tight">
                        OPAPOP
                      </span>
                    </div>
                  </motion.button>

                  {/* RIGHT HALF of the seal */}
                  <motion.button
                    onClick={handleOpen}
                    initial={{ scale: 0, rotate: 45, opacity: 0 }}
                    animate={
                      sealBroken
                        ? { x: 60, y: 10, rotate: 25, opacity: 0, scale: 0.9 }
                        : { scale: 1, rotate: 0, opacity: 1, x: 0, y: 0 }
                    }
                    exit={{ opacity: 0 }}
                    transition={
                      sealBroken
                        ? { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
                        : { delay: 0.6, type: "spring", stiffness: 220, damping: 14 }
                    }
                    whileHover={!sealBroken ? { scale: 1.05 } : undefined}
                    whileTap={!sealBroken ? { scale: 0.94 } : undefined}
                    aria-label="Open invitation"
                    className="absolute inset-0 cursor-pointer"
                    style={{
                      clipPath:
                        "polygon(50% 0, 100% 0, 100% 100%, 50% 100%, 52% 88%, 46% 76%, 54% 64%, 46% 52%, 52% 40%, 44% 28%, 54% 18%, 46% 8%)",
                    }}
                  >
                    <div className="w-full h-full rounded-full bg-gradient-gold shadow-gold border-2 border-ivory animate-glow-pulse flex items-center justify-start pl-3">
                      <span className="font-display tracking-widest text-maroon-deep text-[10px] sm:text-[12px] leading-tight">
                        EIIEDEN
                      </span>
                    </div>
                  </motion.button>

                  {/* Shake wrapper for whole seal at moment of break */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    animate={
                      sealBroken
                        ? { x: [0, -2, 2, -2, 2, 0], rotate: [0, -1, 1, -1, 1, 0] }
                        : {}
                    }
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                  />
                </div>
              )}
            </AnimatePresence>
          </div>

          {!sealBroken && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute bottom-5 left-0 right-0 text-center text-maroon-deep/70 font-serif italic text-sm px-4"
            >
              Tap the seal to open your invitation
            </motion.p>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OpeningAnimation;
