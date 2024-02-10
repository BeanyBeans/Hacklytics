import React from 'react';
import './Category.css'; // Import CSS file for styling
import { ReactComponent as MoviePic } from '../images/movie.svg'; // Importing SVG image

export default function Movie() {
    return (
        <div className="container">
            <MoviePic className="image" />
            <div className="name">{"Movie"}</div>
        </div>
    );
}