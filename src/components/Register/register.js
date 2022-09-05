import { useState} from "react";
import './register.css'
import {Link, useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import * as actionTypes from '../../action/types'
import * as helper from '../../helper'

let RegisterPage = (props) => {
    let [email, setEmail] = useState(null)
    let [user, setUser] = useState(null)
    let [password, setPassword] = useState(null)

    let navigate = useNavigate()
    let dispatch = useDispatch()

    let confirmClick = (e) => {
        if(email&&user&&password){
            if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
                alert("Invalid email")
                return
            }

            let accounts = helper.getAllAccount()
            if(accounts){
                if(accounts.filter(e=>e.email===email).length!==0){
                    alert("This email has been used")
                    return
                }
                if(accounts.filter(e=>e.user===user).length!==0){
                    alert("This username has been used")
                    return
                }
            }
            dispatch({type: actionTypes.REGISTER, payload:{email,user,password}})
            navigate('/login')
            alert('Your account has been registered')
        } else
            alert("You have an unfilled field, please verify it")
    }   
    return(
        <div className="Register">
            <form> 
                <div className="border"> 
                    <h1>Register</h1>
                    <input 
                        placeholder="Email"
                        onBlur={(e)=>setEmail(e.target.value)}
                    />
                    <br/>
                    <input 
                        placeholder="Username"
                        onBlur={(e)=>setUser(e.target.value)}
                    />
                    <br/>
                    <input 
                        placeholder="Password"
                        type="password"
                        onBlur={(e)=>setPassword(e.target.value)}
                    />
                    <br/>
                    <button type="button" onClick={(e)=>confirmClick(e)}>Confirm</button>
                    <br/>
                    <Link to="/login">Already have an account?</Link>
                </div>
            </form>
        </div>
    )
}

export default RegisterPage