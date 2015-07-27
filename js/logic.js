// Sum
function sum(options) {
  var answer = null;
  for (var i = 0; i < options.length; i++) {
    answer += Number(options[i].value);
  }
  return answer;
}
// Count
function count(options) {
  return options.selectedOptions.length;
}
// Sum selected
function sumSelected(options) {
  var answer = null;
  for(var i = 0; i < options.selectedOptions.length; i++) {
    answer += Number(options.selectedOptions[i].value);
  }
  return answer;
}
// Avg
function average(options) {
  return sum(options) / options.length;
}
// Avg selected
function averageSelected(options) {
  return sumSelected(options) / options.selectedOptions.length;
}
