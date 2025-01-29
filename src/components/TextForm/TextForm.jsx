import { useState } from 'react';
import humanizeText from '../../services/api';
import ResultText from '../ResultText/ResultText';

const TextForm = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (!input.trim()) return;

    setIsLoading(true);
    setError('');

    try {
      const humanizedText = await humanizeText(input);
      setResult(humanizedText);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter text to humanize..."
      />
      <button 
        onClick={handleSubmit}
        disabled={isLoading || !input.trim()}
      >
        {isLoading ? 'Processing...' : 'Humanize'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {result && <ResultText text={result} />}
    </div>
  );
};

export default TextForm;