import React from "react";
import './About.css'
function AboutApp () {
    return (
      <>
        <div className="AboutApp">
          <h1>About the App</h1>
          <p>In this app, you can add, delete, submit and edit items. To edit items,simply double click on it. 
            Once you are drone, press the enter key to resubmit. This app will persist your data in the browser 
            local storage. So whether you reload, close your app or reopenedit, you still have access to your 
            to dos items</p>
        </div>
        
      </>
    );
  };
  
  export default AboutApp;