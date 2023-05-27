import React,{useState} from 'react'
import Footer from './footer'
import Header from './header'
import './login.css';

function Login() {
  const [isError,setError] = useState(false);
    const [message,setMessage] = useState("");
    const [classname,setClass] = useState("");

    const checkLogin = () =>{
        let username = document.getElementById("username");
        let password = document.getElementById("password");

        if(username.value.length === 0){
            setMessage("Please enter username");
            setClass("alert alert-danger");
            setError(true);
            username.focus();
            return false;
        }else if(password.value.length === 0){
            setMessage("Please enter password");
            setClass("alert alert-danger");
            setError(true);
            password.focus();
            return false;
        }

        if(username.value === "admin" && password.value === "123456"){
            setMessage("Login successfully");
            setClass("alert alert-success");
            setError(true);
            username.focus();
            window.location.href="/home";
            

            localStorage.setItem("islogin",true);

        }else{
            setMessage("Username/Password wrong");
            setClass("alert alert-danger");
            setError(true);
        }
    }
    return (
      <>
      <Header />
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                       
                        <div className="card-body">
                            {
                                (isError)?(
                                    <div className={classname}>
                                        {message}
                                    </div>
                                ):""
                            }
                            <div className="form-group mb-3">
                                <label className="mb-2">Email</label>
                                <input type="text" id="username" className="form-control" />
                            </div>
                            <div className="form-group mb-3">
                                <label className="mb-2">Password</label>
                                <input type="password" id="password" className="form-control" />
                            </div>
                        </div>
                        <div className="card-footer text-right">
                            <input type="button" value="Login" className="btn btn-danger" onClick={checkLogin} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default Login;
