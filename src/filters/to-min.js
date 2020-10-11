export function toMin(value) {
  let hour = parseInt(value / 60),
    min = value - 60 * hour;

  return min;
}
