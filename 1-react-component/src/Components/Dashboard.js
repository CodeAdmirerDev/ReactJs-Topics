import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Dashboard(){

    return(
        <div className="container">
         <Navbar/>
            <br/>
            <h4> Let's practice 👨‍💻 together 😎 This website is all about programming 😍  </h4> <br/>
             <h5>👉Upcoming dev of : </h5>
             <div class="container text-right">
        <ol class=" list-group-numbered fw-bold">
            <li class="list-group-item">Python</li>
            <li class="list-group-item">AL</li>
            <li class="list-group-item">ML</li>
            <li class="list-group-item">C# | ASP.NET Core</li>
            <li class="list-group-item">HTML5 | Angular | ReactJs</li>
        </ol>
    </div>
    <Footer/>          

        </div>
    )
}
export default Dashboard;