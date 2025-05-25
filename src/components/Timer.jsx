import { useState, useEffect } from 'react';
import TimeBlock from './TimeBlock';

export default function Timer() {
  const [time, setTime] = useState({ h: 0, m: 0, s: 0 });
  const [running, setRunning] = useState(false);
  const [editing, setEditing] = useState(true);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime(prev => {
          let { h, m, s } = prev;
          if (h === 0 && m === 0 && s === 0) {
            clearInterval(interval);
            alert('Taymer bitdi!');
            return { h: 0, m: 0, s: 0 };
          }
          if (s > 0) s--;
          else if (m > 0) { m--; s = 59; }
          else if (h > 0) { h--; m = 59; s = 59; }
          return { h, m, s };
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [running]);

  const increase = (unit) => {
    if (!editing) return;
    setTime(prev => ({ ...prev, [unit]: prev[unit] + 1 }));
  };

  return (
    <div>
      <div>
        <TimeBlock label="h" value={time.h} onClick={increase} />
        <TimeBlock label="m" value={time.m} onClick={increase} />
        <TimeBlock label="s" value={time.s} onClick={increase} />
      </div>
      <button onClick={() => {
        if (!running) setEditing(false);
        setRunning(!running);
      }}>
        {running ? 'Dayan' : 'Başla'}
      </button>
    </div>
  );
}