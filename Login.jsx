import React from 'react';
import { CiUser } from "react-icons/ci";

import './Login.css';


class Login extends React.Component{
    render(){
        return(
            <div className='wrapper'>
                <div id="welcome">
                    <br></br>
                    <h1 id="welcome_txt">Welcome to Digix</h1><br></br>
                </div>
                <div>
                    <h3 id="email_text">
                        Email
                    </h3>
                    <input type="email" placeholder="Email" id="text">
                    </input><br></br>
                    

                    <h3 id="password_text">
                        Password
                    </h3>
                    <input type="password" placeholder="Password" id="text">
                    </input><br></br><br></br>
                    <div id="new">
                    <label>Save your Password     <input type="checkbox"/></label>
                    <a href="#">Forget Password</a>
                    </div>
                    <br></br>
                    <center><button id="login_button">Login</button><br></br><br></br><br></br></center>

                    <hr className='hr'></hr>
                    <center><h3 id="sign_msg">New to Digix?? Let's DigixUp </h3>
                    <button id="login_button1">Sign up</button></center>
                </div>
            </div>
        );
    }
}
export default Login;