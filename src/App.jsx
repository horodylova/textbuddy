import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = () => {
    if (!input.trim()) return;
    setResult("Humanized result will appear here.");
  };

  return (
    <div>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter text to humanize..."
      />
      <button onClick={handleSubmit}>Humanize</button>
      {result && <p>{result}</p>}
    </div>
  );
}

export default App;

