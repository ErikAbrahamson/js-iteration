// Prices vars
var options = document.getElementsByTagName('select')[0];
var span = document.getElementById('answer');
var resultText = null;
var answer = function() {
  span.appendChild(resultText);
};

// Sum All button
sum_all.addEventListener('click', function() {
  span.innerHTML = null;
  resultText = document.createTextNode(sum(options));
  answer();
});

// Count Selected button
count_selected.addEventListener('click', function() {
  span.innerHTML = null;
  resultText = document.createTextNode(count(options));
  answer();
});
