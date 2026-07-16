import { useState, useEffect } from 'react'
import './App.css'

function ActionLog({ actions, onClear }) {
  return (
    <div className="log-section">
      <div className="log-header">
        <h2>Action log</h2>
        {actions.length > 0 && (
          <button className="clear-btn" onClick={onClear}>Clear</button>
        )}
      </div>

      {actions.length === 0 ? (
        <p className="empty-state">No actions yet</p>
      ) : (
        <ul className="action-log">
          {actions.map((action) => (
            <li key={action.id}>
              <span>{action.type} → {action.value}</span>
              <span className="timestamp">{action.time}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function ControlButton({ label, onClick }) {
  return (
    <button onClick={onClick} className="control-btn">
      {label}
    </button>
  );
}

function App() {
  const [count, setCount] = useState(0)
  const [step, setStep] = useState(1)
  const [log, setLog] = useState([])

  useEffect(() => {
    document.title = `Count: ${count}`;
    return () => {
      document.title = "React App";
    };
  }, [count]);

  const addLogEntry = (type, value) => {
    const time = new Date().toLocaleTimeString();
    setLog((prev) => [...prev, { id: crypto.randomUUID(), type, value, time }]);
  };

  const increment = () => {
    const next = count + step;
    setCount(next);
    addLogEntry("Incremented", next);
  };

  const decrement = () => {
    const next = count - step;
    setCount(next);
    addLogEntry("Decremented", next);
  };

  const reset = () => {
    setCount(0);
    addLogEntry("Reset", 0);
  };

  const clearLog = () => setLog([]);

  const countClass =
    count > 0 ? "count positive" : count < 0 ? "count negative" : "count";

  return (
    <div className="page-bg">
      <div className="counter-app">
        <p className="app-eyebrow">React fundamentals</p>
        <h1 className="app-title">Counter app</h1>

        <p className={countClass}>{count}</p>

        <div className="step-control">
          <label htmlFor="step">Step size</label>
          <select id="step" value={step} onChange={(e) => setStep(Number(e.target.value))}>
            <option value={1}>1</option>
            <option value={5}>5</option>
            <option value={10}>10</option>
          </select>
        </div>

        <div className="controls">
          <ControlButton label="-" onClick={decrement} />
          <ControlButton label="Reset" onClick={reset} />
          <ControlButton label="+" onClick={increment} />
        </div>

        <ActionLog actions={log} onClear={clearLog} />
      </div>
    </div>
  )
}

export default App