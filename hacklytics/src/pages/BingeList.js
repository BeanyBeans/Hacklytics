import CategoryList from './CategoryList.js';
import DropList from './DropList.js';
import Generate from './Generate.js';
import React from 'react';
import { useState } from 'react';

export default function BingeList() {
    const [selectedOption, setSelectedOption] = useState(null);
    const [genre, setGenre] = useState('Genre');
    const [mood, setMood] = useState('Mood');
    const [recommendation, setRecommendation] = useState('Your recommendation here');

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
            <CategoryList /> 
            {/* <DropList /> */}
            {/* <Generate />    */}
            <textarea className="recommendation-textbox" value={recommendation} readOnly />
            <button className="generate-button" onClick={handleGenerateRecommendation}>Generate</button>
        </div>
      );
}