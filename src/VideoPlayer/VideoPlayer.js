import React, {Component} from 'react';
import './VideoPlayer.css';
import video from './Video.mp4'

class VideoPlayer extends Component {
  startVideo = () => {
    this.video.play()
  }

  stopVideo = () => {
    this.video.pause()
  }

  render() {
    return (
      <div className="video-player">
        <video className="video-player__source" ref={c => (this.video = c)}>
          <source src={video} type="video/mp4" />
        </video>
        
        <div>
          <button onClick={this.startVideo}>Play</button>
          <button onClick={this.stopVideo}>Stop</button>
        </div>
      </div>
    );
  }
}

export default VideoPlayer;