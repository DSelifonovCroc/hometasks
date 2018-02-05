import React, {Component} from 'react';
import './Switcher.css';

class Switcher extends Component {

  state = {
    selectedChild: 0
  }

  handleSwithChild = (event) => {
    let childIndex = parseInt(event.target.dataset.id, 10);

    this.setState({selectedChild: childIndex});
  }

  render() {
    
    return (
        <div className="switcher">
          <nav>
            <ul className="component-list">
            {
              React.Children.map(this.props.children, (child, index) => {

                let childName = child.type.displayName ? child.type.displayName : child.type.name;

                return (<li onClick={this.toggleChild} className="component-list__name" data-id={index}>{childName}</li>)
              })
            }
            </ul>
          </nav>

          <hr/>

          <div className="component-wrapper">
              {this.props.children[this.state.selectedChild]}
          </div>
        </div>
    );
  }
}

export default Switcher;
