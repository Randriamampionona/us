import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

import { Dispatch, SetStateAction } from "react";

type TProps = {
  setValue: Dispatch<SetStateAction<string>>;
};

type EmojiMartEmoji = {
  id: string;
  name: string;
  native: string; // 👈 this is the actual emoji character
  unified: string;
  shortcodes: string;
  keywords: string[];
  skin?: number;
  emoji?: string;
  custom?: boolean;
};

export default function Emoji({ setValue }: TProps) {
  const apendEmoji = (emoji: EmojiMartEmoji) => {
    setValue((prev) => prev + emoji.native);
  };

  return <Picker theme="light" data={data} onEmojiSelect={apendEmoji} />;
}
