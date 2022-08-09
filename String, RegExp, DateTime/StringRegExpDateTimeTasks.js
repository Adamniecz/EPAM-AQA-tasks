// Given the string 'ahb acb aeb aeeb adcb axeb'. Write a regular expression that matches the strings ahb, acb, aeb by pattern: letter 'a', any character, letter 'b'

let regex1 = /a.b/g;

// Given the string '2 + 3 223 2223'. Write a regex that finds line 2 + 3 without capturing the rest

let regex2 = /(2 \+ 3)/g;

// Get the day, month and year of the current date and output it to the console separately

let date = new Date();

console.log(date.getDate() + " Day of the month");
console.log(date.getMonth() + " Month by JS"); //
console.log(date.getMonth() + 1 + " Month by calendar");
console.log(date.getFullYear() + " Year");
