import styled from 'styled-components';
import { Copy } from 'lucide-react';

export const FormContainer = styled.div`
  display: flex;
  gap: var(--spacing-lg);
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FormSection = styled.div`
  flex: 1;
  background: var(--white);
  padding: var(--spacing-lg);
  border-radius: var(--border-radius);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
`;

export const SectionTitle = styled.h2`
  font-size: 1.25rem;
  margin-bottom: var(--spacing-md);
  color: var(--primary-color);
`;

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 300px;
  padding: var(--spacing-md);
  border: 1px solid #ddd;
  border-radius: var(--border-radius);
  font-family: inherit;
  font-size: 1rem;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px rgba(42, 42, 114, 0.1);
  }
`;

export const SubmitButton = styled.button`
  background-color: var(--primary-color);
  color: var(--white);
  padding: var(--spacing-sm) var(--spacing-md);
  border: none;
  border-radius: var(--border-radius);
  font-size: 1rem;
  font-weight: 500;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: var(--secondary-color);
  }
  
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const ResultContainer = styled(FormSection)`
  pre {
    white-space: pre-wrap;
    word-wrap: break-word;
  }
`;
 
export const ResultText = styled.div`
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-color);
  white-space: pre-wrap;
  word-wrap: break-word;
`;

export const ResultHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-md);
`;

export const CopyButton = styled.button`
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-xs) var(--spacing-sm);
  background-color: transparent;
  border: 1px solid var(--primary-color);
  border-radius: var(--border-radius);
  color: var(--primary-color);
  font-size: 0.875rem;
  transition: all 0.2s;

  &:hover {
    background-color: var(--primary-color);
    color: var(--white);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const CopyIcon = styled(Copy)`
  width: 16px;
  height: 16px;
`;

export const ResultMessage = styled.div`
  color: #666;
  font-style: italic;
`;