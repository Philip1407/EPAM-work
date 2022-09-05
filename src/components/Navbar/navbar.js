import './navbar.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser, faPhotoVideo} from '@fortawesome/free-solid-svg-icons'
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import * as actionTypes from '../../action/types'
import {logo} from '../../video'

let Navbar = () => {
    let user = useSelector(state=>state.user.user)
    let navigate = useNavigate()
    let dispatch = useDispatch()

    let favoriteClick = () => {
        console.log('Clicked')
        navigate('favorite')
    }

    let logOut = () => {
        dispatch({type: actionTypes.LOGOUT})
        navigate('/login')
    }

    let logoClick = ()=>{
        navigate("/")
    }

    return(
        <nav>
            <img src={logo} alt='logo' onClick={()=>logoClick()}></img>
            {/* {!user&&<div className='user'>
                <p>Login</p>
                <button>Register</button>
            </div>
            } */}
            {user&&
                <div className='user'>
                    <FontAwesomeIcon 
                        className='icon' 
                        icon={faPhotoVideo}
                        onClick={() => favoriteClick()}
                    />
                    <p>Hi, {user}</p>
                    <button onClick={()=>logOut()}>Log out</button>
                </div>
            }
        </nav>
    )
}

export default Navbar