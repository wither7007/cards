import React, { Component } from 'react';

class Draw extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="buttonContainer">
           <button className="bt">Draw Card</button> 
            </div>
          );
    }
}
 
export default Draw;