"use client";

import styles from "@/styles/chat.module.css";
import { api } from "../../lib/api";
import { useEffect, useRef, useState } from "react";

type Message = {
  sender: "user" | "ai";
  text: string;
  timestamp: string;
};

export default function Chat({ interview }: { interview: any }) {
  const [messages, setMessages] = useState<Message[]>(interview.messages);

  const [isTyping, setIsTyping] = useState(false);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setMessages(interview.messages);
  }, [interview]);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;
    setIsTyping(true);

    // const userMessage: Message = {
    //   id: Date.now(),
    //   sender: "user",
    //   text: input,
    //   timestamp: new Date().toLocaleTimeString(),
    // };

    // setMessages((prev) => [...prev, userMessage]);
    // setInput("");
    // setIsTyping(true);

    // Simulate AI reply
    //   setTimeout(() => {
    //     const aiMessage: Message = {
    //       id: Date.now() + 1,
    //       sender: "ai",
    //       text: "That’s interesting. Can you explain one challenging project you worked on?",
    //       timestamp: new Date().toLocaleTimeString(),
    //     };

    //     setMessages((prev) => [...prev, aiMessage]);
    //     setIsTyping(false);
    //   }, 1500);
    // };

    try {
      const res = await api.post("/interview/message", {
        interviewId: interview._id,
        message: input,
      });

      setMessages(res.data.interview.messages);
      setInput("");
    } catch (error) {
      console.error("Failed to send message");
    } finally {
      setIsTyping(false);
    }
  };
  return (
    <div className={styles.chatContainer}>
      <div className={styles.messages}>
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`${styles.message} ${
              msg.sender === "user" ? styles.user : styles.ai
            }`}
          >
            <p>{msg.text}</p>
            <span className="text-xs opacity-70 block mt-1">
              {/* {msg.timestamp} */}
              {new Date(msg.timestamp).toLocaleTimeString()}
            </span>
          </div>
        ))}

        {isTyping && (
          <div className={`${styles.message} ${styles.ai}`}>
            <p className="italic opacity-70">AI is typing...</p>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <div className={styles.inputArea}>
        <input
          type="text"
          value={input}
          disabled={isTyping}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your answer..."
          className="flex-1 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 transition"
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          disabled={isTyping}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          Send
        </button>
      </div>
    </div>
  );
}
