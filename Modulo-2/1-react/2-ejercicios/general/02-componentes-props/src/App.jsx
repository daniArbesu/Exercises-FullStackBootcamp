import './App.css';
import Title from './components/Title';
import Paragraph from './components/Paragraph';

function App() {
  const pageTitle = '¡Bienvenid@s a Rock{theCode}!';
  const pageParagraph = 'This is an example from a paragraph with props';

  return (
    <div className="App">
      <Title text={pageTitle} />
      <Paragraph text={pageParagraph} />
    </div>
  );
}

export default App;
