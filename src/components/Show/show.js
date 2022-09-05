import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import {video1, video2, video3} from '../../video'
import './show.css'

let videoList = [video1, video2, video3]

let Show = () => {
    let [video, setVideo] = useState()
    const videoRef = useRef()
    useEffect(() => {
        let random_num = Math.floor(Math.random() * videoList.length)
        console.log(random_num)
        setVideo(videoList[random_num])
        videoRef.current?.load()
    },[])

    return(
        <div className="Show">
            <video ref={videoRef} width="640" height="360" type="video/mp4" controls>
                <source src={video}></source>
            </video>
        </div>
    )
}

export default Show