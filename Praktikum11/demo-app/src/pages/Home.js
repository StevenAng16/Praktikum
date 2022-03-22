import React from "react";
import './About.css'
import Button from '../react-bootstrap/Button'

function Home() {
  return (
    <>

        <div className="Home">
          <div className="container">
          <h1 className="Todos"> Todos </h1>
          <textarea name="message" rows="10" cols="30" placeholder="text the message"></textarea>
          <Button/>
          </div>
          </div>  
    <div></div>
    </>
    
  );
}

export default Home