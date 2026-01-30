"use client";

import styles from "@/styles/chat.module.css";
import { useEffect, useRef, useState } from "react";

type Message = {
  id: number;
  sender: "user" | "ai";
  text: string;
  timestamp: string;
};

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "ai",
      text: "Welcome! Let’s start your mock interview. Tell me about yourself.",
      timestamp: new Date().toLocaleTimeString(),
    },
  ]);

  const [isTyping, setIsTyping] = useState(false);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim() || isTyping) return;

    const userMessage: Message = {
      id: Date.now(),
      sender: "user",
      text: input,
      timestamp: new Date().toLocaleTimeString(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate AI reply
    setTimeout(() => {
      const aiMessage: Message = {
        id: Date.now() + 1,
        sender: "ai",
        text: "That’s interesting. Can you explain one challenging project you worked on?",
        timestamp: new Date().toLocaleTimeString(),
      };

      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className={styles.chatContainer}>
      <div className={styles.messages}>
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`${styles.message} ${
              msg.sender === "user" ? styles.user : styles.ai
            }`}
          >
            <p>{msg.text}</p>
            <span className="text-xs opacity-70 block mt-1">
              {msg.timestamp}
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
