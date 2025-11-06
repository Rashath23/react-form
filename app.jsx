import { useState } from "react";
import SignupForm from "./signupform.jsx";

export default function App() {
  const [text, setText] = useState("");
  

  return (
    <div
      style={{
        padding: "20px",
        background: dark ? "#1a1a1a" : "#f4f4f4",
        color: dark ? "white" : "black",
        minHeight: "100vh"
      }}
    >
      <h1>React Multi-Component App</h1>

      {/* 1. Live Text Preview */}
      <h2>Live Preview</h2>
      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ padding: "8px", width: "250px" }}
      />
      <p><strong>Preview:</strong> {text}</p>

     

      {/* 7–11 Signup Form Component */}
      <SignupForm dark={dark} />
    </div>
  );
}
