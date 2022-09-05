import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './showinfo.css'

let ShowInformation = (props) => {
    let navigate = useNavigate()
    let params = useParams()
    let [data, setData] = useState()
    useEffect(()=>{
        const GetData = async()=>{
            let fetch_data
            await fetch('https://api.tvmaze.com/shows/'+params.id)
                .then(res=>res.json())
                .then(result=>fetch_data=result)
            console.log(fetch_data)
            fetch_data.image = fetch_data.image.medium  
            fetch_data.rating = fetch_data.rating.average
            console.log(fetch_data)
            setData(fetch_data)
        }
        GetData()        
    },[])
    
    let playClick = () => {
        navigate('ep/'+params.id)
    }

    return(
        <div className="ShowInformation">
            <img src={data?.image} alt="Loading"></img>
            <div className="info">
                <h2>{data?.name}</h2>
                <p>Genre: {data?.genres.map((e,i)=> i!==data?.genres.length-1?`${e}, `:e)}</p>
                <p>Language: {data?.language}</p>
                <p>Summary: </p>
                <div dangerouslySetInnerHTML={{__html: data?.summary}}></div>
                <p>Premiered: {data?.premiered}</p>
                <p>Schedule: {data?.schedule.time} {data?.schedule.days}</p>
                <p>Rating: {data?.rating}</p> 
                <button onClick={()=>playClick()}>Play</button>
            </div>
        </div>
    )
}

export default ShowInformation