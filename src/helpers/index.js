export const getSunriseAndSunset = timestamp => {
  const dateObj = new Date(timestamp * 1000);
  let hours = dateObj.getHours();
  let minutes = dateObj.getMinutes();
  let seconds = dateObj.getSeconds();
  hours < "10" ? (hours = "0" + hours) : (hours = hours);
  minutes < "10" ? (minutes = "0" + minutes) : (minutes = minutes);
  seconds < "10" ? (seconds = "0" + seconds) : (seconds = seconds);
  return `${hours}:${minutes}`;
};

export const capitalizeString = str => {
  let arr = [];
  str.split(" ").forEach(word => {
    return arr.push(word[0].toUpperCase() + word.substring(1));
  });
  return arr.join(" ");
};
