import React,{Component} from 'react';
class ClassStateExample extends Component{
    constructor(props){
        super(props)
        this.state={
            count:0,
        };
    }
    componentDidMount() {
  
        
        setInterval(() => {
          this.setState({ count:this.state.count+1 });
        }, 1000);
        
      }
    
      componentDidUpdate(){
        if(this.state.count===10){
            alert("10 seconds completed")
        }
    }
    
    render(){
        return (
            <div>
                <h3>{this.state.count}</h3>

                
            </div>
        )
    }
   
}
export default ClassStateExample;