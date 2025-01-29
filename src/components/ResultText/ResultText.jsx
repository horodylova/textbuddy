import { useState } from "react";

const ResultText = ({ text }) => {
    const [copyStatus, setCopyStatus] = useState('');
  
    const handleCopy = async () => {
      try {
        await navigator.clipboard.writeText(text);
        setCopyStatus('Copied!');
        setTimeout(() => setCopyStatus(''), 2000);
      } catch (err) {
        setCopyStatus('Failed to copy');
      }
    };
  
    return (
      <div>
        <h3>Humanized Result:</h3>
        <div style={{ 
          padding: '10px',
          marginTop: '10px',
          backgroundColor: '#f5f5f5',
          borderRadius: '4px'
        }}>
          <p>{text}</p>
        </div>
        <div style={{ marginTop: '10px' }}>
          <button onClick={handleCopy}>
            {copyStatus || 'Copy to Clipboard'}
          </button>
        </div>
      </div>
    );
  };
  
  export default ResultText;