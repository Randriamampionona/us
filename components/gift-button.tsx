"use client";

import { Button } from "@/components/ui/button";
import GifSection from "./gif-section";

export default function GiftButton() {
  return (
    <div className="w-full flex items-center justify-center mt-6">
      <Button size="lg" className="rounded-lg font-bold">
        I Love You
      </Button>
      <GifSection />
    </div>
  );
}
