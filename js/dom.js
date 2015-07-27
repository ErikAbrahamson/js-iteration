/*

Hints for the first problem:

  1. Find the button with the ID of `sum-all`
  2. Add an event listener that:
    - finds the select element by name (use getElementsByName)
    - passes all of its options to the `sum` function defined in `logic.js`
    - takes the value returned by the `sum` function and displays it on the page

*/


sumall.addEventListener('click', function() {
  var sumAll = document.getElementById('sum-all');
  var options = document.getElementsByTagName('select')[0];
  var showResult = document.createElement('span');
  var resultText = document.createTextNode(sum(options));

  showResult.appendChild(resultText);
  document.getElementById('answer').appendChild(showResult);
});


  // take all option values and return sum in answer div
