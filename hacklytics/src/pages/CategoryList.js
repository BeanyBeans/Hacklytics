import Movie from '../components/Movie';
import Random from '../components/Random';
import Music from '../components/Music';
import { ReactComponent as MoviePic } from '../images/movie.svg'; // Importing SVG image
import { ReactComponent as MusicPic } from '../images/music.svg'; // Importing SVG image
import { ReactComponent as RandomPic } from '../images/random.svg'; // Importing SVG image

import "./CategoryList.css"
import React from 'react';
import { useState } from 'react';

export default function CategoryList({ handleOptionSelect }) {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleClick = (option) => {
        handleOptionSelect(option);
        setSelectedOption(option);
    };
    return (
        <div className="container">
            <button className={`button ${selectedOption === 'movies' ? 'selected' : ''}`} onClick={() => handleClick('movies')}>
                <MoviePic className="image" />Movies
            </button>
            <button className={`button ${selectedOption === 'music' ? 'selected' : ''}`} onClick={() => handleClick('music')}>
                <MusicPic className="image" />Music
            </button>
            <button className={`button ${selectedOption === 'random' ? 'selected' : ''}`} onClick={() => handleClick('random')}>
                <RandomPic className="image" />Random
            </button>
        </div>
      );
}