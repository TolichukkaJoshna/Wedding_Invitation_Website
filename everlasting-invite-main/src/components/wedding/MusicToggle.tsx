import { useEffect, useRef, useState } from "react";
import { Music, VolumeX } from "lucide-react";

const MusicToggle = ({ autoStart }: { autoStart: boolean }) => {
  const [muted, setMuted] = useState(false);
  const [started, setStarted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!audioRef.current) {
      const a = new Audio("/sahilmadan-wedding-invitation-421393.mp3");
      a.loop = true;
      a.preload = "auto";
      a.volume = 0.4;
      audioRef.current = a;
    }
  }, []);

  useEffect(() => {
    const a = audioRef.current;
    if (!autoStart || !a || started) return;

    const playPromise = a.play();
    setStarted(true);

    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(() => {
        // ignore autoplay rejection if browser blocks it
      });
    }
  }, [autoStart, started]);

  useEffect(() => {
    const a = audioRef.current;
    if (!a || !started) return;
    a.volume = muted ? 0 : 0.4;
  }, [muted, started]);

  const toggleMute = () => {
    setMuted((current) => !current);
  };

  return (
    <button
      onClick={toggleMute}
      aria-label={muted ? "Unmute music" : "Mute music"}
      className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-gradient-maroon text-gold-light shadow-gold flex items-center justify-center transition-transform hover:scale-110 ring-1 ring-gold/40"
    >
      {muted ? <VolumeX className="w-5 h-5" /> : <Music className="w-5 h-5 animate-pulse" />}
    </button>
  );
};

export default MusicToggle;
