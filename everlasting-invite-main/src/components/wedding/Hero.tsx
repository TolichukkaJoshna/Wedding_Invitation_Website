import { motion } from "framer-motion";
import ganesha from "@/assets/ganesha.png";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center justify-center px-4 pt-28 pb-20 sm:pt-32 sm:pb-24 md:pt-36 md:pb-32"
    >
      <div className="relative max-w-3xl mx-auto text-center">
        <motion.img
          src={ganesha}
          alt="Lord Ganesha blessing"
          width={512}
          height={512}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="w-20 md:w-28 mx-auto"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mt-6 font-display tracking-[0.45em] text-gold-deep text-[10px] sm:text-xs"
        >
          WITH GOD&rsquo;S BLESSINGS
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="gold-divider w-28 sm:w-40 mx-auto my-6"
        />

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="font-script text-5xl sm:text-7xl md:text-8xl text-royal-gradient leading-[1.5] pt-4 pb-1"
        >
          A Sacred Union
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="font-script text-3xl sm:text-4xl text-gold-deep mt-2"
        >
          of Two Souls
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mt-8 font-serif italic text-maroon/80 text-lg sm:text-xl max-w-xl mx-auto leading-relaxed"
        >
          Sriramula&rsquo;s family joyfully invites you to celebrate
          the wedding of
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mt-6"
        >
          <p className="font-script text-4xl sm:text-6xl text-maroon-deep leading-[1.25]">
            Alekhya <span className="text-gold-deep">&amp;</span> Sai Shiva
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="gold-divider w-28 sm:w-40 mx-auto my-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="font-display tracking-[0.35em] text-maroon-deep text-xs sm:text-sm"
        >
          3<sup>RD</sup> MAY 2026 &middot; HYDERABAD
        </motion.p>

        <motion.a
          href="#invitation"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="inline-flex items-center gap-2 mt-10 px-7 py-3 bg-gradient-maroon text-gold-light font-display tracking-[0.3em] text-xs rounded-sm shadow-gold hover:scale-105 transition-transform"
        >
          VIEW INVITATION
        </motion.a>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.1 }}
          className="mt-10 text-maroon-deep/50 text-2xl animate-bounce"
          aria-hidden
        >
          ⌄
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
