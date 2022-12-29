import { useState } from 'react';
import './App.css';
import { CV } from './CV/Cv';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import More from './components/More/More';

const { hero, education, experience, languages, habilities, volunteer } = CV;

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Hero hero={hero} />
      <About hero={hero} />
      <Education education={education} />
      <Experience experience={experience} />
      <More
        languages={languages}
        habilities={habilities}
        volunteer={volunteer}
      />
    </div>
  );
}

export default App;
