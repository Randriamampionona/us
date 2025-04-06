import Image from "next/image";
import waitingGIf from "@/app/gifs/waiting-bubu.gif";

export default function ChatLoading() {
  return (
    <div className="flex-1 flex-col space-y-2 flex items-center justify-center w-[calc(100vw-2rem)] md:w-[calc(100vw-7rem)] lg:w-[calc(100vw-45rem)] mx-auto h-fit overflow-y-auto overflow-x-hidden px-2">
      <Image src={waitingGIf} alt="waiting..." width={250} height={250} />
      <p className="text-muted-foreground">Waiting...</p>
    </div>
  );
}
