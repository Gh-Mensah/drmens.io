import React from "https://unpkg.com/react@17/umd/react.development.js";
import ReactDOM from "https://unpkg.com/react-dom@17/umd/react-dom.development.js";

function Car(props){
  return <h4>I am a {props.brand}!</h4>;
}

function Garage(){
  return (
    <>
	    <h5>Who lives in my garage?</h5>
	    <Car brand="Ford"/>
    </>
  );
}

ReactDOM.render(<Garage/>, document.getElementById('app'));
