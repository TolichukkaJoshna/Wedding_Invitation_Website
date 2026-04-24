import { useEffect, useState } from "react";

const links = [
  { id: "hero", label: "Home" },
  { id: "invitation", label: "Invitation" },
  { id: "events", label: "Events" },
  { id: "blessings", label: "Blessings" },
  { id: "location", label: "Venue" },
];

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-30 transition-all duration-500 ${
        scrolled
          ? "bg-ivory/85 backdrop-blur shadow-soft border-b border-gold/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        <a href="#hero" className="font-script text-2xl md:text-3xl text-royal-gradient">
          A &amp; S
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className="font-display tracking-[0.25em] text-xs text-maroon-deep/80 hover:text-gold-deep transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-px after:bg-gold-deep after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
              >
                {l.label.toUpperCase()}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
