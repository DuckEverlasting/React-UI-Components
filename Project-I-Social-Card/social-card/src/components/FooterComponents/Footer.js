import React from 'react';
import './Footer.css';

const footer = () => {
  return (
    <footer>
      <i className="far fa-comment" onClick={comment}></i>
      <div className="sync-pair">
        <i className="fas fa-sync" onClick={retweet}></i>
        <span>6</span>
      </div>
      <div className="heart-pair">
        <i className="fas fa-heart" onClick={like}></i>
        <span>4</span>
      </div>
      <i className="far fa-envelope" onClick={message}></i>

    </footer>
  )
}

const comment = function() {
  console.log("COMMENT")
};

const retweet = function() {
  console.log("RETWEET")
};

const like = function() {
  console.log("LIKE")
};

const message = function() {
  console.log("MESSAGE")
};

export default footer;