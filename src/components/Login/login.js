import { useState} from "react";
import './login.css'
import {useNavigate} from "react-router-dom"
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import * as actionTypes from '../../action/types'
import * as helper from '../../helper'

let LoginPage = () => {
    let [user, setUser] = useState(null)
    let [password, setPassword] = useState(null)
    let navigate = useNavigate()
    let dispatch = useDispatch()

    let confirmClick = (e) => {
        let allAccount = helper.getAllAccount()
        let valid = allAccount?.filter(e=>e.user===user&&e.password===password)
        if(valid.length!==0){       
            dispatch({type: actionTypes.LOGIN, payload:valid[0].email})
            navigate('/')
        }
        else 
            alert('Your login infomation seems incorrect')
    }

    return(
        <div className="Login">
            <form> 
                <div className="border"> 
                    <h1>Login</h1>
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
                    <Link to="/register">Don't have account yet?</Link>
                </div>
                
            </form>
        </div>
    )
}

export default LoginPage