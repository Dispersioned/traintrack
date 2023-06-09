export function formatTime(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const sec = seconds % 60;
  if (minutes === 0) return `0:${getLast2Digits(sec)}`;
  return `${minutes > 99 ? minutes : getLast2Digits(minutes)}:${getLast2Digits(sec)}`;
}

function getLast2Digits(x: number) {
  const str = `00${x}`;
  return str.slice(str.length - 2, str.length);
}
