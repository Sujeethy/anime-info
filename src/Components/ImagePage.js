import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import NavBar from './Navbar.js';

import '../styles/App.css';

const ImageDetailPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const { item } = location.state;
  const redirectToTrailer = () => {
    if (item && item.trailer && item.trailer.url) {
      window.open(item.trailer.url, '_blank');
    } else {
      console.error('Trailer URL is missing or invalid.');
    }
  };
  return (
    <div style={{ color: 'white' }}>
      <NavBar />
      <h1 style={{ marginTop: "100px",marginLeft:"30px" }}>Anime Details</h1>
      <div className="box" style={{ backgroundImage: `url(${item.images.jpg.image_url})`}}>
        {/* Adjust the height as needed */}
        </div>
<div style={{display:'flex', justifyContent:"flex-start"}}>
        <img className="card-image" src={item.images.jpg.image_url}/>  
      <div >
        <h1>{item.title}</h1>
        <p>Rank: {item.rank}  Score: {item.score} </p>
        <button onClick={redirectToTrailer} style ={{position:"relative" ,color: 'white',backgroundColor:"red",border:"none",borderRadius:"5px",height:"30px", width:"130px", fontWeight:"800"}}> Watch Trailer</button>
      <p className='text'>{item.synopsis}</p></div>
      </div>{item ? (
        <p>Additional info: {item.title}</p>
      ) : (
        <p>No additional information available</p>
      )}
    </div>
  );
};

export default ImageDetailPage;
