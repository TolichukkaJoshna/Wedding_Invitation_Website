import { useEffect, useState } from "react";
import OpeningAnimation from "@/components/wedding/OpeningAnimation";
import Hero from "@/components/wedding/Hero";
import InvitationCard from "@/components/wedding/InvitationCard";
import EventHighlights from "@/components/wedding/EventHighlights";
import Blessings from "@/components/wedding/Blessings";
import LocationSection from "@/components/wedding/LocationSection";
import Footer from "@/components/wedding/Footer";
import Nav from "@/components/wedding/Nav";
import MusicToggle from "@/components/wedding/MusicToggle";
import FloralPetals from "@/components/wedding/FloralPetals";
import mandala from "@/assets/mandala.png";

const Index = () => {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    document.title = "Alekhya & Sai Shiva — Wedding Invitation | 3 May 2026";
    const desc = "A traditional Indian wedding invitation. Join Alekhya & Sai Shiva on 3rd May 2026 in Hyderabad for the muhurtham and reception celebrations.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", window.location.origin + "/");
  }, []);

  return (
    <>
      <OpeningAnimation onOpen={() => setOpened(true)} />
      <MusicToggle autoStart={opened} />

      <main className="relative overflow-x-hidden">
        {/* Decorative background mandalas */}
        <img
          src={mandala}
          alt=""
          aria-hidden
          width={1024}
          height={1024}
          loading="lazy"
          className="absolute -top-40 -left-40 w-[500px] opacity-[0.07] animate-spin-slow pointer-events-none"
        />
        <img
          src={mandala}
          alt=""
          aria-hidden
          width={1024}
          height={1024}
          loading="lazy"
          className="absolute top-[40%] -right-60 w-[600px] opacity-[0.06] animate-spin-slow pointer-events-none"
          style={{ animationDirection: "reverse" }}
        />
        <img
          src={mandala}
          alt=""
          aria-hidden
          width={1024}
          height={1024}
          loading="lazy"
          className="absolute bottom-0 -left-32 w-[450px] opacity-[0.06] animate-spin-slow pointer-events-none"
        />

        <FloralPetals />
        <Nav />

        <h1 className="sr-only">Alekhya and Sai Shiva — Wedding Invitation, 3rd May 2026, Hyderabad</h1>

        <Hero />
        <InvitationCard />
        <EventHighlights />
        <Blessings />
        <LocationSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
