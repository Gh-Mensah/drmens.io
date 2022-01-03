var quoteArray = ["Welcome to my website brothers!"];
var textPosition = 0; 
// speed in milliseconds
var speed = 100;
typewriter = () => {
  document.querySelector("#app").innerHTML = `${quoteArray[0].substring(0, textPosition)}<span id="type">\u25AE</span>`;
  
  if(textPosition++ != quoteArray[0].length)
    setTimeout(typewriter, speed);
}

window.addEventListener("load", typewriter)