const quoteArray = ["I am Kwaku Asare,a<br/>full MERN Stack developer."];
let textPosition = 0; 
// speed in milliseconds
const speed = 150;
typewriter = () => {
  document.querySelector(".dtextinfo").innerHTML = `${quoteArray[0].substring(0, textPosition)}<code>|</code>`;
  
  if(textPosition++ != quoteArray[0].length)
    setTimeout(typewriter, speed);
}

window.addEventListener("load", typewriter)