import CategoryList from './CategoryList.js';
import DropList from './DropList.js';
import Generate from './Generate.js';
import React from 'react';
import './BingeList.css';
import { useState, useEffect } from 'react';

export default function BingeList() {
    const [selectedOption, setSelectedOption] = useState(null);
    const [genre, setGenre] = useState('Genre');
    const [mood, setMood] = useState('Mood');
    const [recommendation, setRecommendation] = useState('Your recommendation here');
    const [genresList, setGenresList] = useState([]);

    useEffect(() => {
        // Logic to update genresList when selectedOption changes
        if (selectedOption === 'movies') {
            const genres = [
                "Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime",
                "Documentary", "Drama", "Family", "Fantasy", "Film-Noir", "Game-Show",
                "History", "Horror", "Music", "Musical", "Mystery", "News", "Reality-TV",
                "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"
            ];
            setGenresList(genres);
            setGenre(genres[0]); // Set the initial genre to the first one in the list
        } else if (selectedOption === 'music') {
            const genres = [
                "Classical", "Rock", "Stuff"
            ];
            setGenresList(genres);
            setGenre(genres[0]); // Set the initial genre to the first one in the list
        } else if (selectedOption === 'random') {
            const genres = [
                "RickRoll"
            ];
            setGenresList(genres);
            setGenre(genres[0]); // Set the initial genre to the first one in the list
        }
        console.log(genresList);
    }, [selectedOption]);

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        // Reset genre and mood when a new option is selected
        setGenre('Genre');
        setMood('Mood');
    };

    const handleGenerateRecommendation = () => {
        // Logic to generate recommendation based on selectedOption, genre, and mood
        // For now, let's just update the recommendation with a dummy text
        setRecommendation('Dummy recommendation');
    };

    return (
        <div>
            <h1 className="header">BingeList</h1>
            <CategoryList handleOptionSelect={handleOptionSelect}/> 
            <select value={genre} onChange={(e) => setGenre(e.target.value)}>
                {genresList.map((item) => (
                    <option value={item}>{item}</option>
                ))}
            </select>
            {/* <DropList /> */}
            <textarea className="recommendation-textbox" value={recommendation} readOnly />
            <button className="generate-button" onClick={handleGenerateRecommendation}>Generate</button>
        </div>
      );
}