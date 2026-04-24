import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

const events = [
  {
    icon: Heart,
    title: "Wedding",
    date: "3rd May 2026",
    time: "11:55 AM",
    venue: "Grand Imperial Function Hall, Hyderabad",
  },
  {
    icon: Sparkles,
    title: "Reception",
    date: "5th May 2026",
    time: "Evening",
    venue: "NRC Garden, Hyderabad",
  },
];

const EventHighlights = () => {
  return (
    <section id="events" className="relative py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display tracking-[0.5em] text-gold-deep text-xs"
        >
          CELEBRATIONS
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-script text-5xl md:text-6xl text-royal-gradient mt-2 leading-[1.5] pt-2 pb-2"
        >
          Save the Dates
        </motion.h2>
        <div className="gold-divider w-32 mx-auto my-6" />

        <div className="grid sm:grid-cols-2 gap-8 mt-10">
          {events.map((e, i) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className="group relative bg-ivory/80 backdrop-blur rounded-sm p-8 shadow-soft
                border border-gold/30 overflow-hidden"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "radial-gradient(circle at top, hsl(var(--gold) / 0.12), transparent 70%)" }}
              />
              <div className="relative">
                <div className="mx-auto w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold transition-transform duration-500 group-hover:rotate-12">
                  <e.icon className="w-7 h-7 text-maroon-deep" />
                </div>
                <h3 className="font-script text-4xl text-maroon-deep mt-5">
                  {e.title}
                </h3>
                <div className="gold-divider w-20 mx-auto my-4" />
                <p className="font-display text-maroon text-lg">{e.date}</p>
                <p className="font-serif italic text-maroon/70">{e.time}</p>
                <p className="font-serif text-maroon/80 mt-3">{e.venue}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventHighlights;
