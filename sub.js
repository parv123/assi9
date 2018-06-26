function sayhello()
{
	document.getElementById("di2").innerHTML="hello worlfd";
}
function end()
{
	alert("please refresh the page to restart the game");
}
function move() {
  var elem = document.getElementById("myBar");   
  var width = 1;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
    }
  }
}