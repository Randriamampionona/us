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
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      5000 // every 5 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className="!text-center">
      <ConfettiSection />
      <TextTransition
        springConfig={presets.slow}
        delay={4000}
        inline={true}
        className="w-[100%] flex items-center justify-center italic"
      >
        {TEXTS[index % TEXTS.length]}
      </TextTransition>
    </div>
  );
}
