import React,{useState} from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "../cards/card-style.css"



 function Login(props){
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");


    
    function validateForm(){
        return email.length >0 && password.length > 0;
    }

    function handleSubmit(event){
        event.preventDefault();
    }
    return (
        <div className='Login'>
            <form onSubmit={handleSubmit}>
                <FormGroup controlId='email' bsSize='large'>
                    <ControlLabel>Email</ControlLabel>
                    <FormControl
                    autoFocus
                    type='email'
                    value={email}
                    onChange={e=>setEmail(e.target.value)}//storing what user had entered
                    />
                </FormGroup>
                <FormGroup controlId='password' bsSize='large'>
                    <ControlLabel>password</ControlLabel>
                    <FormControl
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    type="password"
                    />
                </FormGroup>
                <Button block bsSize='large' disabled={!validateForm()} type='submit'>
                    Login
                </Button>
            </form>
        </div>
    );

}

export default Login;

