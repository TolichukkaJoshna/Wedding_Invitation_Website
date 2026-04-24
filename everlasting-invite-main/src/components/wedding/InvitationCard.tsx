import { motion } from "framer-motion";
import ganesha from "@/assets/ganesha.png";
import floral from "@/assets/floral-corner.png";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const InvitationCard = () => {
  return (
    <section id="invitation" className="relative py-16 md:py-24 px-4">
      <div className="relative max-w-3xl mx-auto">
        {/* Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative bg-ivory rounded-sm shadow-card overflow-hidden"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at top, hsl(40 60% 96%), hsl(38 50% 90%))",
          }}
        >
          {/* Ornate borders */}
          <div className="absolute inset-3 border border-gold/50 pointer-events-none" />
          <div className="absolute inset-5 border border-gold/25 pointer-events-none" />

          {/* Floral corners */}
          <img
            src={floral}
            alt=""
            aria-hidden
            width={768}
            height={768}
            loading="lazy"
            className="absolute -top-2 -left-2 w-32 md:w-44 opacity-90 select-none pointer-events-none"
          />
          <img
            src={floral}
            alt=""
            aria-hidden
            width={768}
            height={768}
            loading="lazy"
            className="absolute -top-2 -right-2 w-32 md:w-44 opacity-90 select-none pointer-events-none scale-x-[-1]"
          />
          <img
            src={floral}
            alt=""
            aria-hidden
            width={768}
            height={768}
            loading="lazy"
            className="absolute -bottom-2 -left-2 w-32 md:w-44 opacity-90 select-none pointer-events-none scale-y-[-1]"
          />
          <img
            src={floral}
            alt=""
            aria-hidden
            width={768}
            height={768}
            loading="lazy"
            className="absolute -bottom-2 -right-2 w-32 md:w-44 opacity-90 select-none pointer-events-none scale-x-[-1] scale-y-[-1]"
          />

          <div className="relative px-6 sm:px-12 md:px-20 py-14 md:py-20 text-center">
            {/* Ganesha */}
            <motion.img
              {...fade(0)}
              src={ganesha}
              alt="Lord Ganesha"
              width={512}
              height={512}
              className="w-24 md:w-32 mx-auto"
            />

            <motion.p
              {...fade(0.15)}
              className="mt-3 font-display tracking-[0.3em] text-maroon-deep text-xs md:text-sm"
            >
              ॐ श्री गणेशाय नमः
            </motion.p>

            {/* Blessings */}
            <motion.div {...fade(0.25)} className="mt-6 space-y-1">
              <p className="font-display text-maroon text-lg md:text-xl tracking-widest">
                Srirasthu • Shubhamasthu • Avighnamasthu
              </p>
            </motion.div>

            <motion.div {...fade(0.35)} className="gold-divider w-40 mx-auto my-8" />

            <motion.p
              {...fade(0.4)}
              className="font-serif italic text-maroon/80 text-base md:text-lg max-w-xl mx-auto leading-relaxed"
            >
              With the blessings of elders and loved ones, we joyfully invite you to celebrate
              the auspicious wedding of
            </motion.p>

            {/* Couple Names */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="my-10 md:my-12"
            >
              <h2 className="font-script text-5xl md:text-7xl text-royal-gradient leading-[1.5] pt-2 pb-1">
                S. Alekhya
              </h2>
              <p className="font-display text-gold-deep text-2xl md:text-3xl my-2 md:my-3">
                &amp;
              </p>
              <h2 className="font-script text-5xl md:text-7xl text-royal-gradient leading-[1.5] pt-2 pb-2">
                J. Sai Shiva
              </h2>
            </motion.div>

            <motion.div {...fade(0.6)} className="gold-divider w-40 mx-auto my-6" />

            {/* Muhurtham */}
            <motion.div {...fade(0.65)} className="mt-6">
              <p className="font-display text-gold-deep tracking-[0.4em] text-xs md:text-sm">
                MUHURTHAM
              </p>
              <p className="font-display text-maroon-deep text-2xl md:text-3xl mt-3">
                Sunday, 3<sup>rd</sup> May 2026
              </p>
              <p className="font-serif text-maroon text-lg md:text-xl mt-1">
                at 11:55 AM
              </p>
            </motion.div>

            <motion.div {...fade(0.75)} className="mt-6">
              <p className="font-display text-gold-deep tracking-[0.4em] text-xs md:text-sm">
                VENUE
              </p>
              <p className="font-display text-maroon-deep text-xl md:text-2xl mt-3">
                Grand Imperial Function Hall
              </p>
              <p className="font-serif italic text-maroon/80 text-base md:text-lg">
                Hyderabad
              </p>
            </motion.div>

            <motion.div
              {...fade(0.85)}
              className="mt-10 mx-auto max-w-md p-5 border border-gold/40 rounded-sm bg-cream/40 backdrop-blur-sm"
            >
              <p className="font-display text-gold-deep tracking-[0.4em] text-xs">
                RECEPTION
              </p>
              <p className="font-display text-maroon-deep text-lg md:text-xl mt-2">
                Tuesday, 5<sup>th</sup> May 2026
              </p>
              <p className="font-serif italic text-maroon/80">NRC Garden</p>
            </motion.div>

            <motion.p
              {...fade(0.95)}
              className="mt-10 font-serif italic text-maroon/70"
            >
              Your presence is our greatest blessing.
            </motion.p>
          </div>
        </motion.div>

        {/* Glow */}
        <div
          className="absolute -inset-10 -z-10 blur-3xl opacity-50"
          style={{ background: "radial-gradient(closest-side, hsl(var(--gold) / 0.3), transparent)" }}
        />
      </div>
    </section>
  );
};

export default InvitationCard;
