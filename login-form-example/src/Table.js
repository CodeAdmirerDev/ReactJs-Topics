import React, { useState } from "react";
import Loginform from "./Form";
import './Table.css';

function TableData () {
    const[formData,setFormData] = useState([]);
    const tablerows = formData.map((info,index)=>{
        return(
            <tr key={index}>
                <td>{info.name}</td>
                <td>{info.email}</td>
            </tr>
        );
    });
    const addRows=(data)=>{
        const updatedformdata = [...formData];
        updatedformdata.push(data);
        setFormData(updatedformdata);
    }
    return (
        <div>
        <div className="cls-loginform">
        <Loginform shareData={addRows}></Loginform>
        <br/>
        </div>
        <div>
        <table className="cls-formtabledata" border={1}>
        <thead>
        <tr>
        <th>Name</th>
        <th>Email</th></tr>
        </thead> 
        <tbody>{tablerows}</tbody>              
        </table>
        </div>
        </div>
    );
}
export default TableData;