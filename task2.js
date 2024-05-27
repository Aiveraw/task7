document.getElementById('button1').addEventListener('click', changeToBlue); 
document.getElementById('button2').addEventListener('dblclick', changeToPink);
document.getElementById('button3').addEventListener('mouseover', changeToBrown);

function changeToBlue() {
    document.body.style.backgroundColor = "blue";
  }
  function changeToPink() {
    document.body.style.backgroundColor = "pink";
  }
  function changeToBrown() {
    document.body.style.backgroundColor = "brown";
  }
  