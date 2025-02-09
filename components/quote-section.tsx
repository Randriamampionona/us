import getQuotes from "@/action/get-quotes.action";

export default async function QuotSection() {
  const quotes = await getQuotes();

  console.log(quotes);

  return (
    <p className="text-center text-muted-foreground">
      You are the love of my life, my forever and always 💖
    </p>
  );
}
