export default (total, value) => {
  const percentage = ((100 * value) / total).toFixed(2);
  return percentage
    ? percentage > 100
      ? 100
      : percentage < 5
      ? 5
      : total === 0 && value === 0
      ? 0
      : percentage
    : 0;
};
