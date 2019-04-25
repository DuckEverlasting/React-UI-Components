import React from 'react';
import './Card.css';

const CardContent = () => {
  return (
    <div className="card-content">
      <h1 className="title">Get started with React</h1>
      <p className="main">React makes it painless to create interactive UIs. Design simple views for each state in your application.</p>
      <p className="source">reactjs.org</p>
    </div>
  )
}

export default CardContent;