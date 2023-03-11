import React,{ useEffect, useState} from 'react';
import './Banner.css';
import {imageUrl } from '../../Constants/constants';
import axios from '../../axios';

function Banner(props) {
  const [movie,setMovie] = useState([]);
  const [count,setCount]=useState(0);
  const addCount =()=>{
    setCount(count+1);
  };
  useEffect(() =>{
    axios.get(props.url)
      .then((response) =>{
        console.log(response.data.results[count]);
        setMovie(response.data.results[count]);
      });
  },[count,props.url]);
  return (
    <div onClick={addCount}
     style ={{backgroundImage:`url(${movie ? imageUrl+ movie.backdrop_path :""})`}}
     className='banner'>
      <div className='content'>
            <h1 className='title'>{movie ? movie.name || movie.title : ""}</h1>
            <div className='banner_buttons'>
                <button  className='button'>Play</button>
                <button className='button'>My list</button>
            </div>
                  <h1 className='description'>{movie ? movie.overview : ""}</h1>
        </div>
        <div className="fade_bottom">

        </div>
    </div>
  )
}

export default Banner
