module.exports = seconds => {
  const date = new Date(0);
  date.setSeconds(seconds);
  const timeString = date.toISOString().substr(11, 8).substr(3, 8);

  return timeString;
};
