import React from 'react';

const Errorcheck = () => {
    const check=()=>{
        console.log('errror checking')
    }

    return (
        <div>
            <button onClick={check}>Check</button>
        </div>
    );
};

export default Errorcheck;