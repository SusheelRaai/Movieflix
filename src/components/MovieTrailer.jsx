import React, {useState} from 'react'
import './movieTrailer.css'
import Model from './Model';

function MovieTrailer({movie}) {
    const [model, setModel] = useState(false)
const toggleModel = () =>{
    setModel(!model);
};

    return (
        <>
        <div className={`trailer d-flex align-items-center justify-content-center ${movie.active? 'active' : undefined}`}>
            <a href="#" className="playBtn" onClick={toggleModel}>
                <ion-icon name="play-outline"></ion-icon>
            </a>
            <p>watch Trailer</p>
        </div>
        {movie.active && <Model movie={movie} status={model} toggleModel={toggleModel} />}
        </>
    );
}

export default MovieTrailer