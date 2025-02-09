"use server";

type TParams = {
  query: string;
};

const YOUR_TENOR_API_KEY = "AIzaSyCHkiUBe95CRWuM37ZFTE49g_ILw6JNEHc";

export async function getchGifs({ query }: TParams) {
  const API_KEY = YOUR_TENOR_API_KEY;
  const limit = 1;

  const response = await fetch(
    `https://g.tenor.com/v1/search?q=${query}&key=${API_KEY}&limit=${limit}`
  );

  console.log(response);

  if (!response.ok) {
    throw new Error("Failed to fetch GIFs");
  }

  const data = await response.json();
  return data.results; // Returns the GIFs data
}
