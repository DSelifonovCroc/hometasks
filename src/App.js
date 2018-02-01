import React, {Component} from 'react';
import './App.css';
import Switcher from './Switcher';
import CardNumberHolder from './CardNumberHolder';
import ModalButton from './ModalButton';
import VideoPlayer from './VideoPlayer';

class App extends Component {
  render() {
    return (
      <Switcher>
        <VideoPlayer />
        <CardNumberHolder />
        <ModalButton />
      </Switcher>
    );
  }
}

export default App;
