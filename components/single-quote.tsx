"use client";

import { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";
import ConfettiSection from "./confetti-section";

type TProps = {
  quotes: string[];
};

export default function SingleQuote({ quotes }: TProps) {
  const TEXTS = quotes;

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex(Math.floor(Math.random() * quotes.length));
    }, 5000); // every 5 seconds

    return () => clearInterval(intervalId);
  }, [quotes.length]);

  return (
    <div className="!text-center">
      <ConfettiSection />
      <TextTransition
        springConfig={presets.slow}
        delay={3000}
        inline={true}
        className="flex items-center justify-center italic"
      >
        {TEXTS[index % TEXTS.length]}
      </TextTransition>
    </div>
  );
}
