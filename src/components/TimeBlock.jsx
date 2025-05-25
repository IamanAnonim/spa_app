export default function TimeBlock({ label, value, onClick }) {
  return (
    <div onClick={() => onClick(label)}>
      <h3>{label}</h3>
      <p>{value.toString().padStart(2, '0')}</p>
    </div>
  );
}