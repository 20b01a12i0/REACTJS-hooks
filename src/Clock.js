import React, { Component } from 'react';

class Clock extends Component {
    constructor(props){
        super(props)
        this.state={
            date:new Date(),
        };
    }
    componentDidMount() {  
        setInterval(  
          () => this.setState({ date: new Date().toLocaleTimeString() }),  
          1000  
        );  
      }  
  
        
    
    render(){
        return (
            <div>
                <h3>{this.state.date.toString()}</h3>
                
            </div>
        )
    }
   
    
}

export default Clock;