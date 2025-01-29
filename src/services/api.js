import { API_URL } from '../config/api';

 const humanizeText = async (text) => {
  try {
    const response = await fetch(`${API_URL}/api/humanize`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
       
      },
      body: JSON.stringify({ input: text }),
    });

   
    console.log('Response status:', response.status);
    
   
    if (!response.ok) {
      
      try {
        const errorData = await response.json();
        throw new Error(errorData.error || `Server error: ${response.status}`);
      } catch (parseError) {
        throw new Error(`Server error: ${response.status}`);
      }
    }

  
    const textresult = await response.text();
    if (!textresult) {
      throw new Error('Empty response from server');
    }

   
    try {
      const data = JSON.parse(textresult);
      return data.transformedText;
    } catch (parseError) {
      console.error('Failed to parse response:', text);
      throw new Error('Invalid response format from server');
    }
  } catch (error) {
    console.error('API Error:', error);
    throw new Error(
      error.message || 'Failed to connect to the server. Please try again.'
    );
  }
};

export default humanizeText;