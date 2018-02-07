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
    const childrenArray = React.Children.toArray(this.props.children);
    
    return (
        <div className="switcher">
          <nav>
            <ul className="component-list">
            {
              React.Children.map(this.props.children, (child, index) => {

                let childName = child.type.displayName ? child.type.displayName : child.type.name;

                return (<li onClick={this.handleSwithChild} className="component-list__name" data-id={index}>{childName}</li>)
              })
            }
            </ul>
          </nav>

          <hr/>

          <div className="component-wrapper">
            {childrenArray[this.state.selectedChild]}
          </div>
        </div>
    );
  }
}

export default Switcher;
