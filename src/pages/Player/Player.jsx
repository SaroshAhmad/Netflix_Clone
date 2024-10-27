import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useParams } from 'react-router-dom'

const Player = () => {

    const { id } = useParams();

    const [apiData, setApiData] = useState({
        name: "",
        key: "",
        published_at: "",
        typeof: ""
    }
    )

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOTBlY2UxNzVkMDg3ZjJkNjdiMmE1ZDNhYTZiZWE0YyIsIm5iZiI6MTcyOTg5NjYzNy43OTU5MSwic3ViIjoiNjcxYzIwMDBhNGFjOGE0MzJjNWM1MmQ2Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.9XSTCB2tfwQ9WWGTeLSQNf_Ko67RxoiS7CZ1j3s7rGA'
        }
    };

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
            .then(res => res.json())
            .then(res => setApiData(res.results[0]))
            .catch(err => console.error(err));
    }, [])


    return (
        <div className='player'>
            <img src={black_arrow_icon} alt="" />
            <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer' frameborder="0" allowFullScreen></iframe>
            <div className='player-info'>
                <p>{apiData.published_at.slice(0, 10)}</p>
                <p>{apiData.name}</p>
                <p>{apiData.type}</p>
            </div>
        </div>
    )
}

export default Player