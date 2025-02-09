"use client";

import { getchGifs } from "@/action/get-gif";
import { useState } from "react";

export default function GifSection() {
  const [query, setQuery] = useState("cat");
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const gifsData = await getchGifs({ query }); // Call the server action to get GIFs
      setGifs(gifsData);
    } catch (error) {
      console.error("Error fetching GIFs:", error);
    } finally {
      setLoading(false);
    }
  };

  console.log(gifs);

  return (
    <div>
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white p-2 rounded"
      >
        {loading ? "Loading..." : "Search"}
      </button>

      <pre>{gifs}</pre>
    </div>
  );
}
