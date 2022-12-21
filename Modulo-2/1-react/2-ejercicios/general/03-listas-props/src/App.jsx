import './App.css';
import Food from './components/Food';

const foods = [
  { name: 'pizza', calories: 1400 },
  { name: 'hamburger', calories: 1000 },
  { name: 'fish and chips', calories: 600 },
  { name: 'salad', calories: 400 },
];

function App() {
  return (
    <div className="App">
      {foods.map((food) => (
        <Food name={food.name} calories={food.calories} />
      ))}
    </div>
  );
}

export default App;
