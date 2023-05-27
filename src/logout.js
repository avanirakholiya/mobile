import React, { useEffect } from 'react'

export default function Logout() {
    const logout = () =>{
        localStorage.setItem("islogin",false);
        window.location.href="/";
        return false;
    }
    const init = () =>{
        if(localStorage.getItem("islogin")==="false"){
            console.log("Hi");
            window.location.href="/";
            return false;
        }
    }
    useEffect(() => {
        init();
    });

    

    return (
        <>
            {
                (localStorage.getItem("islogin") == "true")?(
                    <>
                        <h1>Welcome Admin</h1>                    
                        <button onClick={logout} className="btn btn-danger">Logout</button>
                    </>
                ):""
            }
        </>
    )
}
