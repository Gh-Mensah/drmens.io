import React from 'react';

//importing typewriter-effect
import Typewriter from "typewriter-effect";

function App() {
return (
	<div className="App">
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

export default App;