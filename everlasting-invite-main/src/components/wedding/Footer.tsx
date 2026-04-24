import { motion } from "framer-motion";
import floral from "@/assets/floral-corner.png";

const Footer = () => {
  return (
    <footer className="relative py-20 px-4 text-center overflow-hidden">
      <div className="max-w-3xl mx-auto relative">
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          src={floral}
          alt=""
          aria-hidden
          width={768}
          height={768}
          loading="lazy"
          className="w-40 mx-auto rotate-90 opacity-90"
        />

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="font-script text-4xl md:text-5xl text-royal-gradient mt-6 leading-[1.5] pt-2 pb-2"
        >
          With Best Compliments From
        </motion.h3>

        <div className="gold-divider w-32 mx-auto my-6" />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-serif italic text-maroon text-lg md:text-xl"
        >
          Our Near &amp; Dear Ones — Family, Friends, and Well-wishers
          <br />
          whose love and blessings make this union sacred.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-12 space-y-2"
        >
          <p className="font-script text-3xl text-gold-deep">Alekhya &amp; Sai Shiva</p>
          <p className="font-display tracking-[0.4em] text-xs text-maroon/70">
            3 • MAY • 2026
          </p>
        </motion.div>

        <p className="mt-12 text-xs font-serif italic text-maroon/50">
          © 2026 — A celebration of love, tradition &amp; togetherness.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
