import { db } from "@/firebase";
import { doc, updateDoc } from "firebase/firestore";
import { CHATCOLECTION_DEV, CHATCOLECTION_PROD } from "@/constant";

const CHATCOLECTION =
  process.env.NODE_ENV === "development"
    ? CHATCOLECTION_DEV
    : CHATCOLECTION_PROD;

type TData = {
  message_id: string;
  reactionData: {
    reactor_id: string;
    reaction: string;
  } | null;
};

export async function setReaction({ message_id, reactionData }: TData) {
  try {
    const docRef = doc(db, CHATCOLECTION, message_id);
    await updateDoc(docRef, {
      reaction: reactionData,
    });
  } catch (error) {
    console.error("Error updating document:", error);
  }
}
