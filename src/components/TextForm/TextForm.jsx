import { useState } from 'react';
import humanizeText from '../../services/api';

import {
  FormContainer,
  FormSection,
  StyledForm,
  TextArea,
  SubmitButton,
  ResultContainer,
  SectionTitle,
  ResultText,
  ResultHeader,
  CopyButton,
  CopyIcon,
  ResultMessage
} from './TextForm.styled';

const TextForm = () => {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const humanizedText = await humanizeText(text);
      setResult(humanizedText);
      setIsCopied(false);  
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(result);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);  
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  return (
    <FormContainer>
      <FormSection>
        <SectionTitle>Your Text</SectionTitle>
        <StyledForm onSubmit={handleSubmit}>
          <TextArea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter your text here..."
          />
          <SubmitButton 
            type="submit" 
            disabled={!text.trim() || isLoading}
          >
            {isLoading ? 'Processing...' : 'Humanize Text'}
          </SubmitButton>
        </StyledForm>
      </FormSection>
      
      <ResultContainer>
        <ResultHeader>
          <SectionTitle>Result</SectionTitle>
          {result && (
            <CopyButton
              onClick={handleCopy}
              disabled={isLoading || !result}
            >
              <CopyIcon />
              {isCopied ? 'Copied!' : 'Copy'}
            </CopyButton>
          )}
        </ResultHeader>
        {result ? (
          <ResultText>{result}</ResultText>
        ) : (
          <ResultMessage>
            {isLoading 
              ? 'Processing your text...' 
              : 'Your humanized text will appear here'}
          </ResultMessage>
        )}
      </ResultContainer>
    </FormContainer>
  );
};

export default TextForm;