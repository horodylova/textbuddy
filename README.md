# TextBuddy

TextBuddy is a full-stack application that helps users improve their text by making it more human-like and natural. Whether you're writing business communications, content for your website, or any other text that needs to sound more personable, TextBuddy can help transform rigid or formal text into a more conversational tone.

TextBuddy offers intelligent suggestions in real time, helping you fine-tune your writing for clarity, tone, and flow. With support for multiple use cases—from emails and blog posts to product descriptions and social media captions—TextBuddy becomes your reliable writing companion. Whether you're a non-native speaker or a seasoned professional, you'll find it easier than ever to connect with your audience in a natural, authentic way.

Webside lives [here](https://textbuddy-fawn.vercel.app/) 

## Features

- Text transformation from formal to conversational style
- Real-time processing
- Responsive design that works on both desktop and mobile devices
- Copy-to-clipboard functionality
- Clean and intuitive user interface

## Tech Stack

### Frontend
- React.js
- Styled Components for styling
- Modern JavaScript (ES6+)
- Responsive design principles

### Backend
The backend repository can be found at [textbuddy-api](https://github.com/horodylova/textbuddy)

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm 
- Git

### Installation

1. Clone the repository:
```bash
git clone  https://github.com/horodylova/textbuddy
```

2. Install dependencies:
```bash
npm install
 
```

3. Create a `.env` file in the root directory and add your backend API URL:
```
VITE_API_URL=your deployed backend URL
```

4. Start the development server:
```bash
npm run dev
 
```

The application will be available at `http://localhost:3000`

## Usage

1. Enter your text in the input field on the left
2. Click the "Humanize Text" button
3. View the transformed text in the result panel on the right
4. Use the copy button to easily copy the transformed text to your clipboard

## Project Structure

```
src/
├── components/
│   └── TextForm/
│       ├── TextForm.jsx
│       └── TextForm.styles.js
├── styles/
│   └── GlobalStyles.js
├── App.js
├── App.styles.js
└── index.js
```

## Related Projects

- [TextBuddy API](https://github.com/horodylova/textbuddy-api) - Backend repository

## Acknowledgments

- The author is [horodylova](https://github.com/horodylova)  
