
import './App.css'
import { signal } from "@preact/signals-react";

const count = signal(0);

function App() {
  

  const increment = () => {
    count.value++;
    console.log(count.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>{count}</div>
        <button onClick={increment}>increment</button>
      </header>
    </div>
  );
}

export default App
