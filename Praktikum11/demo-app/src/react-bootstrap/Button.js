import React from 'react'

function Button({onClick}) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }
  return (
    <form onSubmit={handleSubmit}>
      <button className="btn btn-primary" type="submit" onClick={onClick}>Submit</button>
    </form>
  );
}

export default Button;