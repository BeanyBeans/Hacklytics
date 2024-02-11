import Movie from '../components/Movie';
import Random from '../components/Random';
import Music from '../components/Music';
import { ReactComponent as MoviePic } from '../images/movie.svg'; // Importing SVG image
import { ReactComponent as MusicPic } from '../images/music.svg'; // Importing SVG image
import { ReactComponent as RandomPic } from '../images/random.svg'; // Importing SVG image

import "./CategoryList.css"
import React from 'react';

export default function CategoryList({ handleOptionSelect }) {
    const handleClick = (option) => {
        handleOptionSelect(option);
    };

    return (
        <div className="container">
            <button className="button" onClick={() => handleClick('movies')}><MoviePic className="image" />Movies</button>
            <button className="button" onClick={() => handleClick('music')}><MusicPic className="image" />Music</button>
            <button className="button" onClick={() => handleClick('random')}><RandomPic className="image" />Random</button>
        </div>
      );
}