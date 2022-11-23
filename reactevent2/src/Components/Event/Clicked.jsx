import React, { Component } from 'react'
import './Clicked.css'
class Clicked extends Component {
    state = {
        clicked: false,   
        text:'Click here' 
    }
    clickHandler = () =>{
        this.setState({text:'Clicked', clicked: true})
    }
    
  render() {
  const {text,clicked} = this.state;
    let className = 'btn';

    if(!clicked){
        className = 'red-color';
    }
    else{
        className = 'blue-color';
    }    return (
        
      <div>
<button type='button'className={className} onClick={this.clickHandler}>{text}</button>

      </div>
    )
  }
}
export default Clicked
