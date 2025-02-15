import Image from "next/image";
// import srcTEst from "../app/gifs/3.gif";

type TProps = {
  src: string;
};

export default function GifSection({ src }: TProps) {
  return (
    <div className="z-10 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <Image src={src} alt="GIF image" width={498} height={372} />
    </div>
  );
}
