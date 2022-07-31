let response = prompt(
  'What period of time do you want to know in seconds? Please enter 1 - if an hour, 2 - if a day, 3 - if a month'
);

let hourToSeconds = 3_600;
let dayToSeconds = 86_400;
let monthToSeconds = 259_200_0;
let errorMessage = 'Period of time is unavailable';

if (response === '1') {
  alert(hourToSeconds);
} else if (response === '2') {
  alert(dayToSeconds);
} else if (response === '3') {
  alert(monthToSeconds);
} else {
  alert(errorMessage);
}
