import React from 'react';
import { useState } from 'react';
import './Category.css'; // Import CSS file for styling

export default function Card (props) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const { recommendations } = props; // recommendation is an array of 
    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? recommendations.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === recommendations.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="card">
            {recommendations.length > 0 ? (
                <>
                    <div className="card-content">
                        <img src={recommendations[currentIndex].imageLink} alt={recommendations[currentIndex].title} />
                    </div>
                    <div className="card-buttons">
                        <button onClick={handlePrevious}>Previous</button>
                        <h3>{recommendations[currentIndex].title}</h3>
                        <button onClick={handleNext}>Next</button>
                    </div>
                </>
            ) : (
                <p>No recommendations available</p>
            )}
        </div>
    );
};
