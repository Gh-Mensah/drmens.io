import React from 'react';
//importing typewriter-effect
import Typewriter from "typewriter-effect";

function App() {
return (
	<div id="fmapp">
	<Typewriter

	onInit={(typewriter)=> {

	typewriter
		
	.typeString("GeeksForGeeks")
		
	.pauseFor(1000)
	.deleteAll()
	.typeString("Welcomes You")
	.start();
	}}
	/>
	</div>
);
}
ReactDOM.render(
    <App/>, 
    document.getElementById("app")
);