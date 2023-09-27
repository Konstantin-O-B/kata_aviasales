export default function getTimes(startTime, duration) {
  const endTime = new Date(startTime).getTime() + duration * 60 * 1000;
  const startMinutes =
    new Date(startTime).getMinutes() < 10 ? `0${new Date(startTime).getMinutes()}` : new Date(startTime).getMinutes();
  const startHours =
    new Date(startTime).getHours() < 10 ? `0${new Date(startTime).getHours()}` : new Date(startTime).getHours();
  const endMinutes =
    new Date(endTime).getMinutes() < 10 ? `0${new Date(endTime).getMinutes()}` : new Date(endTime).getMinutes();
  const endHours =
    new Date(endTime).getHours() < 10 ? `0${new Date(endTime).getHours()}` : new Date(endTime).getHours();
  return `${startHours}:${startMinutes}-${endHours}:${endMinutes}`;
}
