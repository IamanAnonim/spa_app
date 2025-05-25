import { useEffect, useState } from 'react';

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <h2>
      {time.getHours().toString().padStart(2, '0')}:
      {time.getMinutes().toString().padStart(2, '0')}:
      {time.getSeconds().toString().padStart(2, '0')}
    </h2>
  );
}