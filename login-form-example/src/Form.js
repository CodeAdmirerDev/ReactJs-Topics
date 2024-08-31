import React, { useState } from "react";

function Loginform(props) {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const[errors,setErrors] = useState({});

    const validate = () => {
        let tempErrors = {};
        let isValid = true;

        // Name validation
        if (!name) {
            tempErrors["name"] = "Name is required.";
            isValid = false;
        } else if (name.length < 6 || name.length >10) {
            tempErrors["name"] = "Name must be at least 6 min and Max 10 characters long.";
            isValid = false;
        }
         // Email validation
         if (!email) {
            tempErrors["email"] = "Email is required.";
            isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            tempErrors["email"] = "Email is invalid.";
            isValid = false;
        }
        setErrors(tempErrors);
        return isValid;
    };
  /*   const onChangeName= (event) => {
       setName(event.target.value);
    }
    const onChangeEmail=(event) => {
        setEmail(event.target.value);
    } */
    const transferData = (event) => {
        event.preventDefault();
        if(validate()){
            const dataval = {name,email};
            props.shareData(dataval);
            setName('');
            setEmail('');
            setErrors({});
        }       
};
    const clearData =() =>{
        setName('');
        setEmail('');
    }
return(
    <form onSubmit={transferData}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/> <br/>
        {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}<br/>
        <label>Email:</label> 
        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/> <br/>
        {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}<br/>
        <button type="Submit">Login</button> &nbsp;
        <button type="reset" onClick={clearData}>Clear</button>
    </form>
);
}
export default Loginform;