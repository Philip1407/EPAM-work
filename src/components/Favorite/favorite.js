import { useState, useEffect } from "react";
import * as helper from '../../helper'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHeart} from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from "react-redux";
import * as actionTypes from '../../action/types'
import './favorite.css'

const Favorite = () => {
    let [favoriteList, setFavoriteList] = useState([])
    let dispatch = useDispatch()

    useEffect(()=>{
        let GetData = async() => {
            await fetch("https://api.tvmaze.com/shows")
                .then(data=>data.json())
                .then(result=>{
                    let storeList = helper.getFavoritesFromStore()
                    let data = []
                    storeList.forEach(e=>{
                        data.push(result.find(o=>o.id===e))
                    })
                    setFavoriteList(data)
                })
        }
        GetData()
    },[])

    let favoriteClick = (ele,e) =>{
        dispatch({type: actionTypes.REMOVE_FAVORITE, payload: ele})
        setFavoriteList(favoriteList.filter(o=>o.id!==ele))
    }

    return(
        <div className="Favorite">
            <h2>Favorite List</h2>
            <div className="list">
                <ul>
                    {favoriteList.map(ele=>
                        <li key={ele.id.toString()}>
                            <img 
                                src={ele.image.medium}
                                alt="Loading"
                                id={ele.id.toString()}>
                            </img>
                            <p>Premiered: {ele.premiered}</p>
                            <p>Rating: {ele.rating.average}</p>
                            <FontAwesomeIcon 
                                className="favorite"
                                icon={faHeart} 
                                onClick={(e)=>favoriteClick(ele.id,e)}/>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Favorite