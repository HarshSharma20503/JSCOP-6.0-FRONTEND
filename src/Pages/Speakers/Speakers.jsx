
import React from 'react';
import "./Speakers.css";
// import { Color } from 'framer';
function Speaker() {
  return (
    <div>
      <div className='headSpeaker'> <h1>SPEAKERS</h1> </div>
    <div className="container">
      <div className="card">
        <div className="image">
          <img src="https://i.pinimg.com/originals/a4/7b/a5/a47ba59b4a353e0928ef0551ca44f980.jpg" alt="Placeholder" />
        </div>
        <div className="content">
          <h3>This is content</h3>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="card">
        <div className="image">
          <img src="https://i.pinimg.com/originals/a4/7b/a5/a47ba59b4a353e0928ef0551ca44f980.jpg" alt="Placeholder" />
        </div>
        <div className="content">
          <h3>This is content</h3>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="card">
        <div className="image">
          <img src="https://i.pinimg.com/originals/a4/7b/a5/a47ba59b4a353e0928ef0551ca44f980.jpg" alt="Placeholder" />
        </div>
        <div className="content">
          <h3>This is content</h3>
        </div>
      </div>
    </div>
    </div>
  );
}
export default Speaker;
