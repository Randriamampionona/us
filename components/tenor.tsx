import { useEffect, useState } from "react";

export default function GifLoader() {
  const [previewGif, setPreviewGif] = useState("");
  const [shareGif, setShareGif] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apikey = "AIzaSyCHkiUBe95CRWuM37ZFTE49g_ILw6JNEHc";
        const clientkey = "love_project";
        const lmt = 1;
        const searchTerms = [
          "bubu and dudu kiss",
          "i love you bubu",
          "i love you dudu",
          "miss you bubu",
          "miss you dudu",
        ];

        // Pick a random search term from the array
        const randomTerm =
          searchTerms[Math.floor(Math.random() * searchTerms.length)];

        const searchUrl = `https://tenor.googleapis.com/v2/search?q=${randomTerm}&key=${apikey}&client_key=${clientkey}&limit=${lmt}&random=true`;

        const response = await fetch(searchUrl);
        const data = await response.json();

        if (data.results && data.results.length > 0) {
          setPreviewGif(data.results[0].media_formats.nanogif.url);
          setShareGif(data.results[0].media_formats.gif.url);
        }
      } catch (error) {
        console.error("Error fetching GIFs:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <img src={shareGif} alt="Share GIF" width={498} height={372} />
    </div>
  );
}
