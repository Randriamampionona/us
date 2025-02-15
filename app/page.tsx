import GiftButton from "@/components/gift-button";
import QuotSection from "@/components/quote-section";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen flex items-center justify-center flex-col">
      <div>
        <h1 className="text-center text-7xl font-bold">Mamour 💕</h1>
        <QuotSection />
        <GiftButton />
      </div>

      <p className="absolute bottom-2 text-sm text-muted-foreground">
        By <Link href="https://tooj-rtn.vercel.app/">Tooj Rtn</Link> &copy;{" "}
        {new Date().getFullYear()}
      </p>
    </main>
  );
}
