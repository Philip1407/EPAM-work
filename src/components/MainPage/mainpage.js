import { type } from "@testing-library/user-event/dist/type";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHeart} from '@fortawesome/free-solid-svg-icons'
import * as actionTypes from '../../action/types'
import * as helper from '../../helper'
import './mainpage.css'
import { useDispatch } from "react-redux";

let MainPage = () => {
    let [list, setList]= useState([])
    let [filter, setFilter] = useState(null)
    let filterGenre = ["Drama",
                        "Science-Fiction",
                        "Thriller"]
    let navigate = useNavigate()
    let dispatch = useDispatch()
    let [favorite_list, setFavoriteList] = useState(helper.getFavoritesFromStore())

    useEffect(()=>{
        let GetData = async() => {
            await fetch("https://api.tvmaze.com/shows")
                .then(data=>data.json())
                .then(result=>setList(result))
        }
        GetData()
    },[])

    let itemClick = (ele,e) => {
        navigate('show/'+ele.id)
    }

    let filterClick = (e) => {
        if(filter!==e.target.name)
            setFilter(e.target.name)
        else
            setFilter(null)
    }

    let favoriteClick = (ele,e) =>{
        console.log(favorite_list.filter(o=>o===ele).length!==0)
        if(favorite_list.filter(o=>o===ele).length!==0)
            dispatch({type: actionTypes.REMOVE_FAVORITE, payload: ele})
        else
            dispatch({type: actionTypes.ADD_FAVORITE, payload: ele})
        setFavoriteList(helper.getFavoritesFromStore())
        console.log(favorite_list)
    }

    return(
        <div className="MainPage">
            <div className="filter">
                <p>FILTER</p>
                {filterGenre.map(type=>(
                    <button
                        key={type}
                        className={filter===type?"selected":""} 
                        name={type}
                        onClick={(e)=>filterClick(e)}>
                            {type}
                    </button>
                ))}
            </div>
            <div className="list">
                <ul>
                    {(filter?list.filter(e=>e.genres.filter(o=>o===filter).length!==0):list).map(ele=>
                        <li key={ele.id.toString()}>
                            <img 
                                src={ele.image.medium}
                                alt="Loading"
                                id={ele.id.toString()}
                                onClick={(e)=>itemClick(ele,e)}>
                            </img>
                            <p>Premiered: {ele.premiered}</p>
                            <p>Rating: {ele.rating.average}</p>
                            <FontAwesomeIcon 
                                className={favorite_list.find(e=>e===ele.id)?"favorite":"heart"}
                                icon={faHeart} 
                                onClick={(e)=>favoriteClick(ele.id,e)}/>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default MainPage