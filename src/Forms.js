import React, { useState } from 'react';

const Forms = () => {
    const [username,setUsername]=useState("");
    const [pass,setPass]=useState("");
    const change=(e)=>{
        //console.log(e.target.value);
        if(e.target.name==='user'){
        setUsername(e.target.value);
        console.log(e.target.value);
        }
        else if(e.target.name==='pass'){
            setPass(e.target.value);
            console.log(e.target.value);
        }
    }
    // const changePass=(e)=>{
    //     console.log(e.target.value);
    //     setPass(e.target.value);
    // }
    return (
        <div>
            <form action="">
            <input type= "text" placeholder= "username" value={username} onChange={change} name="user"/>
            <input type="password" value={pass} onChange={change} name="pass"/>
            </form>
        </div>
    );
};

export default Forms;