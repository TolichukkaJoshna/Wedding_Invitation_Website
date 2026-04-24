import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const LocationSection = () => {
  return (
    <section id="location" className="relative py-24 md:py-28 px-4 scroll-mt-24">
      <div className="max-w-5xl mx-auto text-center">
        <p className="font-display tracking-[0.5em] text-gold-deep text-xs">VENUE</p>
        <h2 className="font-script text-5xl md:text-6xl text-royal-gradient mt-2 leading-[1.5] pt-2 pb-2">
          Find Your Way
        </h2>
        <div className="gold-divider w-32 mx-auto my-6" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1 }}
          className="grid md:grid-cols-2 gap-8 mt-10 items-stretch"
        >
          <div className="bg-ivory/80 backdrop-blur p-8 rounded-sm border border-gold/30 shadow-soft text-left flex flex-col justify-center">
            <MapPin className="w-10 h-10 text-gold-deep mb-4" />
            <h3 className="font-display text-2xl text-maroon-deep">
              Grand Imperial Function Hall
            </h3>
            <p className="font-serif italic text-maroon/70 mt-1">Hyderabad, Telangana</p>
            <div className="gold-divider my-5" />
            <p className="font-serif text-maroon">
              Join us as we exchange vows under blessings of family and tradition.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Grand+Imperial+Function+Hall+Hyderabad"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-maroon text-gold-light font-display tracking-widest text-sm rounded-sm shadow-gold hover:scale-105 transition-transform"
              >
                GET DIRECTIONS
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Grand+Imperial+Function+Hall+Hyderabad"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-gold/50 text-maroon-deep font-display tracking-widest text-xs rounded-sm hover:bg-gold/10 transition-colors"
              >
                OPEN IN GOOGLE MAPS
              </a>
            </div>
          </div>

          <div className="rounded-sm overflow-hidden border border-gold/40 shadow-card min-h-[320px] relative bg-cream/40">
            <iframe
              title="Grand Imperial Function Hall — Hyderabad"
              src="https://www.google.com/maps?q=Grand+Imperial+Function+Hall+Hyderabad&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
            />
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Grand+Imperial+Function+Hall+Hyderabad"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-3 right-3 z-10 inline-flex items-center gap-2 px-4 py-2 bg-gradient-maroon text-gold-light font-display tracking-widest text-[11px] rounded-sm shadow-gold hover:scale-105 transition-transform"
            >
              <MapPin className="w-3.5 h-3.5" /> TAP TO VIEW ON MAP
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationSection;
