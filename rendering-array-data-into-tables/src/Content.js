import React, { Component } from "react";

class MainContent extends Component{
  state= {title: "Students", count:5,
    students:[
        {id:1, name:"Mouni", phone: 354533, address:{city: "Chandragiri"}},
        {id:2, name:"Suri", phone: 237246, address:{city: "Kalasapadu"}},
        {id:3, name:"Padma", phone: 9382874, address:{city: "Chandragiri"}},
        {id:4, name:"Babu", phone: 1753133, address:{city: "Chandragiri"}},
    ]       
  };
    render(){
        return(
        <div>
                <h2 className="border-bottom m-1 p-1">{this.state.title} <span></span>
                <span>{this.state.count}</span>
                <br/>
                <button className="btn btn-info" onClick={this.onClickRefresh}>Refresh</button></h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.students.map((stud)=>{
                            return(
                        <tr key={stud.id}>
                        <td>{stud.id}</td>
                        <td>{stud.name}</td>
                        <td>{stud.phone}</td>
                        <td>{stud.address.city}</td></tr>
                            );
                        }                       
                    )}                       
                    </tbody>
                </table>
        </div>  
        );
    }
    onClickRefresh= () =>{
        this.setState({
            count : this.state.students.length
        });
    }
}
export default MainContent;