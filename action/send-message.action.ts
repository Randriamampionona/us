import { db } from "@/firebase";
import { TMessageDataToSend } from "@/typing";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { CHATCOLECTION_DEV, CHATCOLECTION_PROD } from "@/constant";

const CHATCOLECTION =
  process.env.NODE_ENV === "development"
    ? CHATCOLECTION_DEV
    : CHATCOLECTION_PROD;

export async function sendMessage(data: TMessageDataToSend) {
  try {
    const docRef = await addDoc(collection(db, CHATCOLECTION), {
      ...data,
      timestamp: serverTimestamp(),
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
