import './App.css';
import color from 'randomcolor';
import { useState } from 'react';

function App() {
  const [oneColor, setOneColor] = useState(color.randomColor());
  const [inputValue, setInputValue] = useState('');
  return (
    <div className="App">
      <div id="container">
        <div className="item">
          <p>{oneColor}</p>
        </div>
        <div
          className="circle"
          style={{
            backgroundColor: oneColor,
            animationDelay: '-3s',
          }}
        />
        <div
          className="circle"
          style={{
            backgroundColor: oneColor,
            animationDelay: '-2s',
          }}
        />
        <div
          className="circle"
          style={{
            backgroundColor: oneColor,
            animationDelay: '-1s',
          }}
        />
        <div
          className="circle"
          style={{
            backgroundColor: oneColor,
            animationDelay: '0s',
          }}
        />
      </div>
      <div className="btn">
        <button
          className="changeColor"
          onClick={() => setOneColor(color.randomColor())}
        >
          Change Color
        </button>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setOneColor(color.randomColor({ hue: inputValue }));
          console.log(inputValue);
        }}
      >
        <label>
          <input // State #2: Synchronize the value to the HTML
            value={inputValue}
            onChange={(event) => {
              // State #3: Update the value
              setInputValue(event.currentTarget.value);
            }}
          />
        </label>
        <button type="submit" value="Submit">
          Change it
        </button>
      </form>
    </div>
  );
}
export default App;
