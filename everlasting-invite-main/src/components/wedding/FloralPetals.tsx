const PETALS = Array.from({ length: 14 });

const FloralPetals = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden">
      {PETALS.map((_, i) => {
        const left = (i * 7.3) % 100;
        const duration = 12 + ((i * 3) % 18);
        const delay = (i * 1.7) % 14;
        const size = 8 + ((i * 5) % 12);
        return (
          <span
            key={i}
            className="absolute top-0 animate-petal-fall"
            style={{
              left: `${left}%`,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
              width: size,
              height: size,
            }}
          >
            <span
              className="block rounded-full"
              style={{
                width: size,
                height: size,
                background:
                  "radial-gradient(circle at 30% 30%, hsl(var(--gold-light)), hsl(var(--gold)) 60%, hsl(var(--maroon) / 0.7))",
                opacity: 0.55,
                filter: "blur(0.3px)",
              }}
            />
          </span>
        );
      })}
    </div>
  );
};

export default FloralPetals;
