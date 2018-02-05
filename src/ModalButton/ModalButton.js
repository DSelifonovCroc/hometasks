import React, {Component} from 'react';
import './ModalButton.css';
import Modal from './Modal';

class ModalButton extends Component {
  state = {
    isModalShow: false
  }

  hideModal = () => {
    this.setState({isModalShow: false})
  }

  showModal = () => {
    this.setState({isModalShow: true})
  }

  render() {
    return (
        <div className="modal-holder">
          <button onClick={this.showModal}>Show modal!</ button>

          {
            this.state.isModalShow && 
              <Modal domNode={document.querySelector('#portal')}>
                <div className="modal">
                  <div className="modal__fog">
                    <div className="modal__body">
                      <div>Modal window</div>
                      <button onClick={this.hideModal}>Close</button>
                    </div>
                  </div>  
                </div>

              </Modal>
            }
        </div>
    );
  }
}

export default ModalButton;
