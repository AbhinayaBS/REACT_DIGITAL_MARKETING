import React from 'react';
import './Signin.css';

class Signin extends React.Component{
    render(){
        return(
            <div className="wrapper">
                <form action="">
            <div id="back1">
            <div class='well' id="login_box">
                <div id="welcome">
                    <br></br>
                    <h1 id="welcome_txt">Sign Up to </h1><h1 id="title">Digix!!!</h1>
                </div>
                <div>

                <h3 id="email_text">Name</h3>
                    <input type="text" placeholder="Enter your name ..." id="text">
                    

                    </input><br></br>

                    <h3 id="email_text">Email</h3>
                    <input type="email" placeholder="Enter your email ..." id="text">
                    </input><br></br>

                    <h3 id="password_text">Password</h3>
                    <input type="password" placeholder="Enter your password ..." id="text"></input>

                    
                    <h3 id="Conf_pass">Confirm Password</h3>
                    <input type="password" placeholder="Confirm your password ..." id="text">
                    </input><br></br>
                    
                    <h3 id="age">Enter Age</h3>
                    <input type="number" placeholder='Enter your age ...' id="num"></input><br></br><br></br>

                    <h3 id="age">Enter Mobile No</h3>
                    <input type="tel" placeholder='Enter your number ...' id="num"></input><br></br><br></br><br></br>

                    <button id="signin_button"><h3>Sign Up</h3></button>
                    
                </div>
            </div>
            </div>
            </form>
            </div>
        );
        
    }
}
export default Signin;
