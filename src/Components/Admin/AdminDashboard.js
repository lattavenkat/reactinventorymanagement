import React,{useState } from "react";
import { Redirect } from "react-router-dom";

const AdminDashboard=()=>{
    const [isAuth,setIsAuth]=useState(true);
    if(!isAuth){
        return<Redirect to="/AdminLogin"/>
    }
    return <div>
        <button onClick={()=> setIsAuth(false)}>LOGOUT</button><br />
    </div>
}
export default AdminDashboard;