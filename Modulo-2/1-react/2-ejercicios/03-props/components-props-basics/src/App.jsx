import './App.css';
import { Image, Paragraph, Subtitle, Title } from './components';

function App() {
  return (
    <div className="App">
      <Title text="Welcome to Props in ReactJS" />
      <Subtitle text="This is an example of a props components with ReactJS" />
      <Image
        src="./public/onja_crew.jpg"
        alt="Random prop"
        width="500"
        height="600"
      />
      <Paragraph text="This is an example from a paragraph with props" />
    </div>
  );
}

export default App;
