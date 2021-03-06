import React from "react";
import Message from "@/components/Message/Message";
import styles from "./styles.module.css";

export default function MessagesList({ messages }) {
  return (
    <div className={styles.messages}>
      <ul className="message">
        {messages.map((message) => (
          <Message content={message.content} nickname={message.nickname} key={message.id} />
        ))}
      </ul>
    </div>
  );
}
