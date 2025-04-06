import { db } from "@/firebase";
import { doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { CHATCOLECTION_DEV, CHATCOLECTION_PROD } from "@/constant";

const CHATCOLECTION =
  process.env.NODE_ENV === "development"
    ? CHATCOLECTION_DEV
    : CHATCOLECTION_PROD;

type TData = {
  message_id: string;
  message: string;
};

export async function editMessage({ message_id, message }: TData) {
  try {
    const docRef = doc(db, CHATCOLECTION, message_id);
    await updateDoc(docRef, {
      message,
      editedAt: serverTimestamp(),
    });
    console.log(`Document ${message_id} updated`);
  } catch (error) {
    console.error("Error updating document:", error);
  }
}
