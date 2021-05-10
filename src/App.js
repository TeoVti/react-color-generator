import './App.css';
import color from 'randomcolor';
import { useState } from 'react';

function App() {
  const [oneColor, changeColor] = useState(color.randomColor());
  return (
    <div className="App">
      <div id="container">
        <div className="item">
          <p>{oneColor}</p>
        </div>
        <div
          className="circle"
          style={{
            backgroundColor: oneColor.toString(),
            animationDelay: '-3s',
          }}
        />
        <div
          className="circle"
          style={{
            backgroundColor: oneColor.toString(),
            animationDelay: '-2s',
          }}
        />
        <div
          className="circle"
          style={{
            backgroundColor: oneColor.toString(),
            animationDelay: '-1s',
          }}
        />
        <div
          className="circle"
          style={{
            backgroundColor: oneColor.toString(),
            animationDelay: '0s',
          }}
        />
      </div>
      <div className="btn">
        <button
          className="changeColor"
          onClick={() => changeColor(color.randomColor())}
        >
          Change Color
        </button>
      </div>
    </div>
  );
}
export default App;
