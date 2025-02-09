import GiftButton from "@/components/gift-button";
import QuotSection from "@/components/quote-section";

export default function Home() {
  return (
    <main className="w-screen h-screen flex items-center justify-center">
      <div>
        <h1 className="text-center text-7xl font-bold">Mamour 💕</h1>
        <QuotSection />
        <GiftButton />
      </div>
    </main>
  );
}
