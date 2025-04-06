"use server";

import { db } from "@/firebase";
import { TMessage, TMessages } from "@/typing";
import { auth } from "@clerk/nextjs/server";
import {
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";
import { CHATCOLECTION_DEV, CHATCOLECTION_PROD } from "@/constant";

const CHATCOLECTION =
  process.env.NODE_ENV === "development"
    ? CHATCOLECTION_DEV
    : CHATCOLECTION_PROD;

export async function setSeen() {
  const { userId } = await auth();

  try {
    const q = query(
      collection(db, CHATCOLECTION),
      orderBy("timestamp", "desc")
    );

    const querySnapshot = await getDocs(q);

    const allMessages: TMessages = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    // Filter out the ones sent by the current user

    const othersLastMessage: TMessage = allMessages.find(
      (message) => message.sender_id !== userId
    );

    if (!othersLastMessage) return; // no last message

    if (othersLastMessage.is_seen == true) return; // already seen

    const docRef = doc(db, CHATCOLECTION, othersLastMessage.id);
    await updateDoc(docRef, {
      is_seen: true,
    });
  } catch (err) {
    console.error("Error updating last message:", err);
  }
}
