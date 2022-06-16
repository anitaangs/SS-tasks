
const red = document.getElementById('red');
const yellow = document.getElementById('yellow');
const green = document.getElementById('green');

const colors = ['rgb(51, 51, 51)', 'rgb(255, 0, 0)','rgb(255, 255, 0)','rgb(0, 128, 0)'];

function next() {
    if  (red.style.backgroundColor == colors[1])
    {
        red.style.backgroundColor = colors[0]; 
        yellow.style.backgroundColor = colors[2];
    }
    else if (yellow.style.backgroundColor == colors[2]) {
        yellow.style.backgroundColor = colors[0]; 
        green.style.backgroundColor = colors[3]; 
    }
    else if (green.style.backgroundColor == colors[3]) {
        green.style.backgroundColor = colors[0]; 
        red.style.backgroundColor = colors[1];
    }
 }
  