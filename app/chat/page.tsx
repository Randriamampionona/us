import ChatForm from "@/components/chat/chat-form";
import ChatView from "@/components/chat/chat-view";

export default function ChatPage() {
  return (
    <div className="flex items-center justify-center flex-col w-full h-screen py-12">
      <ChatView />
      <ChatForm />
    </div>
  );
}
