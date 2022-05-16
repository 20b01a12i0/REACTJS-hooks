//import necessary dependencies
import React from 'react';
import ReactDOM from 'react-dom';
//import ClassStateExample from './ClassStateExample';
// import Clock from './Clock';
//import Button from './Button';
// import WelcomeMsg from './WelcomeMsg';
// import Forms from './Forms';
// import Signin from './Signin';
 import Register from './Register';
 
//import Hooks1 from './Hooks1';
function App(){
        return(
                 <>
                 
                 <Register />
                {/* <Signin />
                 <Forms />  */}
                </>
        )
}
ReactDOM.render(
        
          <App />,

        document.getElementById('root')
      );
