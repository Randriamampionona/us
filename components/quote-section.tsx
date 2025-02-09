import getQuotes from "@/action/get-quotes.action";
import SingleQuote from "./single-quote";

export default async function QuotSection() {
  const quotes = await getQuotes();

  return (
    <div className="text-center text-muted-foreground">
      <SingleQuote quotes={quotes} />
    </div>
  );
}
