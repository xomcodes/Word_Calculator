// Declare Variables
var button = document.getElementById('btn');

button.addEventListener('click',function(){
  var input = document.getElementById('inp').value;
  var output = document.getElementById('output');
  var count = input.length;
  
  
  
  output.innerHTML = `<h1>${count}<h1>`
});




