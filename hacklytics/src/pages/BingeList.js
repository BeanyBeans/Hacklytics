import CategoryList from './CategoryList.js';
import DropList from './DropList.js';
import Generate from './Generate.js';
import React from 'react';
import './BingeList.css';
import { useState, useEffect } from 'react';
import movieCSV from '../MovieGenre.csv';
import Card from '../components/Card.js';

export default function BingeList() {
    const [selectedOption, setSelectedOption] = useState(null);
    const [genre, setGenre] = useState('Genre');
    const [mood, setMood] = useState('Mood');
    const [recommendation, setRecommendation] = useState([]);
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
                "Mystery"
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
    function parseMoviesCSV(csvData, genre) {
        // Split the CSV data into lines
        const lines = csvData.split('\n');
        // Remove the header line
        const header = lines.shift();
        // Define a helper function to parse a CSV line into an object
        function parseLine(line) {
            const [imdbId, imdbLink, title, imdbScore, genreList, poster] = line.split(',');
            return {
                imdbId: imdbId.trim(),
                imdbLink: imdbLink.trim(),
                title: title.trim(),
                imdbScore: parseFloat(imdbScore.trim()),
                genre: genreList.trim().split('|'),
                poster: poster.trim().substr(1),
            };
        }
        // Parse each line and filter by genre
        const movies = lines.map(parseLine).filter(movie => movie.genre.includes(genre));
        // Sort the movies by IMDb score
        movies.sort((a, b) => b.imdbScore - a.imdbScore);
        // Extract titles and return
        // const titles = movies.map(movie => movie.title);
        // return titles;
        // Extract title and image url and return 
        const recommendations = movies.map(movie => ({ title: movie.title, imageLink: movie.poster }));
        return recommendations
    }

    const handleGenerateRecommendation = () => {
        if (selectedOption === 'movies') {
            fetch(movieCSV)
                .then(r => r.text())
                .then(csvData => {
                    const recommendations = parseMoviesCSV(csvData, genre);
                    setRecommendation(recommendations);
                });
                // .then(csvData => {
                //     const movieTitles = parseMoviesCSV(csvData, genre);
                //     setRecommendation(`Recommended movie: ${movieTitles}`);
                // });
            // const movieTitles = parseMoviesCSV(csvData, genre);
            // setRecommendation(`Recommended movie: ${movieTitles}`);
            // Check if there are movies available for the selected genre
            // if (movies.length > 0) {
            //     // If there are movies, select a random one
            //     const randomIndex = Math.floor(Math.random() * movies.length);
            //     const randomMovie = movies[randomIndex];
                
            //     // Update the recommendation with the title of the random movie
            //     setRecommendation(`Recommended movie: ${randomMovie}`);
            // } else {
            //     // If no movies are available for the selected genre, show a message
            //     setRecommendation('No movies found for the selected genre');
            // }
        } else {
            // For other options (e.g., 'music', 'random'), update recommendation accordingly
            setRecommendation(`Generating recommendation for ${selectedOption}`);
        }
        // Logic to generate recommendation based on selectedOption, genre, and mood
        // For now, let's just update the recommendation with a dummy text
        // setRecommendation('Dummy recommendation');
    };

    return (
        <div>
            <h1 className="header">BingeList</h1>
            <CategoryList handleOptionSelect={handleOptionSelect}/> 
            <div className="miniHeader">Select category to start</div>
            <select value={genre} onChange={(e) => setGenre(e.target.value)}>
                {genresList.length > 0 ? (
                    genresList.map((item) => (
                        <option key={item} value={item}>{item}</option>
                    ))
                ) : (
                    <option value="Genre">Genre</option>
                )}
            </select>
            {/* <DropList /> */}
            <textarea className="recommendation-textbox" value={recommendation} readOnly />
            <Card className="card" recommendations={recommendation} readOnly />
            <button className="generate-button" onClick={handleGenerateRecommendation}>Generate</button>
        </div>
      );
}