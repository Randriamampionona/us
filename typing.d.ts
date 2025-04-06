import { Timestamp } from "firebase-admin/firestore";

type TReaction = {
  reactor_id: string;
  reaction: string;
} | null;

type TMessageDataToSend = {
  sender_id: string;
  username: string | null;
  message: string;
  reaction: TReaction;
  is_seen: boolean;
  is_deleted: boolean;
};

type TMessage = {
  id: string;
  message: string;
  sender_id: string;
  username: string;
  timestamp: Timestamp;
  editedAt?: Timestamp;
  reaction: TReaction;
  is_seen: boolean;
  is_deleted: boolean;
};

type TMessages = Message[];
