import GlobalStyle from './styles/GlobalStyles';
import { AppContainer, AppHeader } from './styles/App.styled';
import TextForm from './components/TextForm/TextForm';

function App() {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <AppHeader>Text Humanizer</AppHeader>
        <TextForm />
      </AppContainer>
    </>
  );
}

export default App;

