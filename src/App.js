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
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setOneColor(
              color.randomColor({
                hue: inputValue.split(' ')[0],
                luminosity: inputValue.split(' ')[1],
              }),
            );
          }}
        >
          <input
            className="input"
            value={inputValue}
            onChange={(event) => {
              setInputValue(event.currentTarget.value);
            }}
          />
          <button className="changeColor" type="submit" value="Submit">
            Change it
          </button>
        </form>
      </div>
    </div>
  );
}
export default App;
