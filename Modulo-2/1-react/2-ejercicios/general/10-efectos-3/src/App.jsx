import { useEffect, useState } from 'react';
import './App.css';

const FONT_SIZE_MIN = '12';
const FONT_SIZE_MAX = '40';

function App() {
  const [style, setStyle] = useState({});
  const [backgroundColor, setBackgroundColor] = useState('white');
  const [textColor, setTextColor] = useState('black');
  const [fontSize, setFontSize] = useState('16');

  useEffect(() => {
    const newStyles = {
      ...style,
      backgroundColor: backgroundColor,
      color: textColor,
      fontSize: `${fontSize}px`,
    };
    setStyle(newStyles);
  }, [backgroundColor, textColor, fontSize]);

  return (
    <div className="App">
      <h2>Edita los estilso de este botón: </h2>
      <button style={style}>Estilos dinámicos</button>
      <br />
      <label htmlFor="bgColorPicker">
        Selecciona un color de fondo:
        <input
          type="color"
          name="bgColorPicker"
          id="bgColorPicker"
          onChange={() => setBackgroundColor(event.target.value)}
        />
      </label>
      <br />
      <label htmlFor="textColorPicker">Selecciona un color de texto: </label>
      <input
        type="color"
        name="textColorPicker"
        id="textColorPicker"
        onChange={() => setTextColor(event.target.value)}
      />
      <br />
      <label htmlFor="fontSizePicker">Selecciona el tamaño del texto: </label>
      <input
        type="number"
        min={FONT_SIZE_MIN}
        max={FONT_SIZE_MAX}
        value={fontSize}
        name="fontSizePicker"
        id="fontSizePicker"
        onChange={() => setFontSize(event.target.value)}
      />
      <br />
    </div>
  );
}

export default App;
