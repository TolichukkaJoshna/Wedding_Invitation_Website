import { motion } from "framer-motion";

const Blessings = () => {
  return (
    <section id="blessings" className="relative py-20 md:py-28 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="font-display tracking-[0.5em] text-gold-deep text-xs"
        >
          BLESSINGS
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="font-script text-5xl md:text-6xl text-royal-gradient mt-3 leading-[1.5] pt-2 pb-2"
        >
          Two Hearts, One Soul
        </motion.h2>

        <div className="gold-divider w-32 mx-auto my-8" />

        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="font-serif italic text-maroon/85 text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto"
        >
          &ldquo;Marriages are made in heaven and celebrated on earth.
          May this sacred bond be blessed with love, laughter, and
          everlasting togetherness.&rdquo;
        </motion.blockquote>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="gold-divider w-24 mx-auto my-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="font-script text-3xl md:text-4xl text-gold-deep"
        >
          Shubhamasthu
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mt-4 font-serif text-maroon/70 text-base md:text-lg"
        >
          Your presence and blessings will mean the world to us.
        </motion.p>
      </div>
    </section>
  );
};

export default Blessings;
