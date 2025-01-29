# TextBuddy

TextBuddy is a full-stack application that helps users improve their text by making it more human-like and natural. Whether you're writing business communications, content for your website, or any other text that needs to sound more personable, TextBuddy can help transform rigid or formal text into a more conversational tone.

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
git clone  https://github.com/horodylova/textbuddy-api
```

2. Install dependencies:
```bash
npm install
 
```

3. Create a `.env` file in the root directory and add your backend API URL:
```
REACT_APP_API_URL=your deployed backend URL
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
