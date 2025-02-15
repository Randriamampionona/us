"use server";

type MediaFormat = {
  nanogif?: { url: string };
  tinygif?: { url: string };
  mediumgif?: { url: string };
  gif?: { url: string };
  mp4?: { url: string };
  webm?: { url: string };
};

type TenorResult = {
  id: string;
  media_formats: MediaFormat;
};

type TenorApiResponse = {
  results: TenorResult[];
};

const API_KEY = process.env.TENOR_KEY!;
const clientkey = "love_project";
const lmt = 1;

export async function getchGifs() {
  try {
    const searchTerms = [
      "bubu and dudu kiss",
      "dudu kiss",
      "bubu kiss",
      "cute bubu",
      "cute dudu",
      "i love you bubu",
      "i love you dudu",
      "miss you bubu",
      "miss you dudu",
    ];
    const randomTerm =
      searchTerms[Math.floor(Math.random() * searchTerms.length)];

    const searchUrl = `https://tenor.googleapis.com/v2/search?q=${randomTerm}&key=${API_KEY}&client_key=${clientkey}&limit=${lmt}&random=true`;

    const response = await fetch(searchUrl);

    const data: TenorApiResponse = await response.json();
    if (data.results && data.results.length > 0) {
      // PreviewGif(data.results[0].media_formats.nanogif.url);
      // ShareGif(data.results[0].media_formats.gif.url);

      return data.results[0].media_formats.gif?.url;
    }
  } catch (error: any) {
    return `Error fetching GIFs:", ${error}`;
  }
}
