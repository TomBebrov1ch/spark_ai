import { useState } from "react";

interface MessageObject {
  id: string;
  message: string;
}

function useConnectWebSocket() {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [messages, setMessages] = useState<MessageObject[]>([]);
  const [newMessage, setNewMessage] = useState("");

  const connectWebSocket = (chatID: number) => {
    const ws = new WebSocket(
      `wss://sparkai-production-dbad.up.railway.app/ws/chat/${chatID}`
    );
    setSocket(ws);

    ws.onmessage = (event: MessageEvent) => {
      try {
        const messageObject: MessageObject = JSON.parse(event.data);
        setMessages((prevMessages) => {
          if (!prevMessages.some((msg) => msg.id === messageObject.id)) {
            return [...prevMessages, messageObject];
          }
          return prevMessages;
        });
      } catch (error) {
        console.error("Error parsing incoming message", error);
      }
    };

    ws.onerror = (event) => {
      console.error("WebSocket Error", event);
    };

    ws.onclose = () => {
      console.log("WebSocket Disconnected");
      setSocket(null);
      connectWebSocket(chatID);
    };
    return () => {
      ws.close();
    };
  };

  const sendMessage = () => {
    if (!socket) return;

    if (newMessage) {
      const messageData = {
        message: newMessage,
      };
      socket.send(JSON.stringify(messageData));
      console.log("Text message has been sent successfully!", messageData);
    }
    setNewMessage("");
  };
  const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewMessage(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };
}
