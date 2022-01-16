const quoteArray = ["I am Kwaku Asare,a full MERN Stack developer."];
let textPosition = 0; 
// speed in milliseconds
const speed = 180;
typewriter = () => {
  document.querySelector(".dtextinfo").innerHTML = `${quoteArray[0].substring(0, textPosition)}<code>|</code>`;
  
  if(textPosition++ != quoteArray[0].length)
    setTimeout(typewriter, speed);
}

window.addEventListener("load", typewriter);