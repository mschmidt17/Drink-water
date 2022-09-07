import { useState } from 'react';
import './App.css';


function App() {
  const [fullCups, setFullCups] = useState(0);
  const cups = [1, 2, 3, 4, 5, 6, 7, 8];
  const totalCups = cups.length;

  return (
    <div className="App">
      <h1>Drink Water</h1>
      <h3>Goal: 2 Liters</h3>
      <div className="cup">
        <div
          className="water"
          style={
            fullCups === totalCups
              ? { visibility: 'hidden', height: 0 }
              : { visibility: 'visible' }
          }
        >
          <span> {100 - (fullCups / totalCups) * 100} %</span>
        </div>
        <div
          className="percentage"
          style={
            fullCups === 0
              ? { visibility: 'hidden', height: 0 }
              : {
                  visibility: 'visible',
                  height: `${(fullCups / totalCups) * 330}px`,
                }
          }
        >
          {(fullCups / totalCups) * 100} %
        </div>
      </div>
      <p className="text">
        Select how many glasses of water that you have drank
      </p>
      <div className="cups">
        {cups.length > 0 &&
          cups.map((cup) => (
            <div
              key={cup}
              className={`cup cup-small${fullCups >= cup ? ' full' : ''}`}
              onClick={() =>
                setFullCups((prev) => (prev === cup ? prev - 1 : cup))
              }
            >
              250
              <br />
              ml
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
