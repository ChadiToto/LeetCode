/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function (date) {
  date = date.split("-");
  let leap = false;

  /* Leap day Algorithm */
  if (date[0] % 4 != 0) leap = false;
  else if (date[0] % 100 != 0) leap = true;
  else if (date[0] % 400 != 0) leap = false;
  else leap = true;

  console.log(leap);

  /* Mapping the months with its associated days */
  let months = {
    "1": 31,
    "3": 31,
    "4": 30,
    "5": 31,
    "6": 30,
    "7": 31,
    "8": 31,
    "9": 30,
    "10": 31,
    "11": 30,
    "12": 31,
  };

  // February's case
  if (leap) months[2] = 29;
  else months[2] = 28;

  let days = parseInt(date[2]);
  for (let i = 1; i < parseInt(date[1]); i++) {
    days += months[i];
  }
  return days;
};
