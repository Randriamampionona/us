import Image from "next/image";
import src from "../app/gifs/3.gif";

export default function GifSection() {
  return (
    <div>
      <Image src={src} width={500} height={500} alt="Picture of the author" />
    </div>
  );
}
