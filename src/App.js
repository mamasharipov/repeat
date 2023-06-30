import Home from "./Home";
import { useState } from "react";
import './style.css';

function App() {
  const [num, setNum] = useState(0);

  return (
    <div className="App">
      <h1>
        {num}{' '}
        {num === 99
          ? 'max'
          : num === 0
          ? 'min'
          : num === 10
          ? 'Hello'
          : ''}
      </h1>

      <button className="plus" onClick={() => {
        if (num < 99) this.state(num + 1);
      }}>+</button>

      <button className="minus" onClick={() => {
        if (num > 0) this.state(num - 1);
      }}>-</button>

      <button className="reset" onClick={() => {
        this.state(0);
      }}>reset</button>

      <button className="max" onClick={() => {
        this.state(99);
      }}>max</button>

      <button className="five" onClick={() => {
        if (num < 95) this.state(num + 5);
        else if (num < 99) this.state(99);
      }}>+5</button>

      <button className="-5" onClick={() => {
        if (num >= 5) setNum(num - 5);
        else if (num > 0) setNum(0);
      }}>-5</button>

      
    </div>
  );
}

export default App;







