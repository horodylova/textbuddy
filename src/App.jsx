import { useState } from "react";
import { fetchHumanizedText } from "./api/api";
import { humanize } from "./utils/humanize";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!input.trim()) return;
    setLoading(true);

    try {
      const prompt = humanize(input);
      const response = await fetchHumanizedText(prompt);
      setResult(response);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter text to humanize..."
      />
      <button onClick={handleSubmit} disabled={loading}>
        {loading ? "Processing..." : "Humanize"}
      </button>
      {result && <p>{result}</p>}
    </div>
  );
}

export default App;

