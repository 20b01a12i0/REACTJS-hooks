import React, { useState } from 'react';

const Signin = () => {
   let  details={
       
       pass:"",
       email:"",
   }
   const[data,setData]=useState("");
   const inputChange=(e)=>{
     let name1=e.target.name; 
     let value1=e.target.value;
     setData({... data,[name1]:value1});
   }
   const formSubmit=(e)=>{
     e.preventDefault();
     console.log(data);
    //  setData(details);
   }
   
    return (
        <div>
        <form className="ui form" onSubmit={formSubmit}>
  <div className="field">
    <label>Email</label>
    <input type="email" name="email" placeholder="Enter email"  value={data.email} onChange={inputChange} />
  </div>
  <div className="field">
    <label>Password</label>
     <input type="password" name="password" placeholder='enter password' value={data.pass} onChange={inputChange} />
  </div>
  <div className="field">
    <div className="ui checkbox">
      <input type="checkbox" tabIndex="0"  />
      <label>Remember Me</label>
    </div>
  </div>
  <button className="ui button" type="submit">Submit</button>
</form>
        </div>
    );
};

export default Signin;