import './App.css';

const school = 'Rock{theCode}';
const chapters = 6;
const isAwesome = true;
const technologies = ['JavaScript', 'React', 'Node'];
const profile = {
  job: 'Web developer',
  description: '¡Me encanta la programación y el desarrollo web!',
};

function App() {
  return (
    <div className="App">
      <h1> Estudio en {school}</h1>
      <p>Veremos un total de {chapters} módulos de contenido</p>
      <p>
        Lo que estoy aprendiendo en {school} está siendo{' '}
        {isAwesome ? 'increible' : 'top'}
      </p>
      <ul>
        {technologies.map((technology) => (
          <li>Aprendemos a usar {technology}</li>
        ))}
      </ul>
      <h3>
        Quiero ser {profile.job} y {profile.description}
      </h3>
    </div>
  );
}

export default App;
