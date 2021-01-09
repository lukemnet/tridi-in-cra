import { useEffect } from 'react';
import * as Tridi from 'tridi';
import './App.css';
import './tridi.css';

function App() {
  const tridiInstance = Tridi.create({
    element: '.tridi-basic',
    location: '/images/white',
    format: 'jpg',
    count: 36,
  });

  useEffect(() => {
    tridiInstance.load();
  });

  return (
    <div className="App">
      <header className="App-header">
        <div className="tridi-basic"></div>
      </header>
    </div>
  );
}

export default App;
