import React from 'react';
import { useState, useEffect } from 'react';
import './Card.css'; // Import CSS file for styling


export default function Card (props) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const { recommendations } = props; // recommendation is an array o
    useEffect(() => {
        setCurrentIndex(0);
    }, [recommendations]);
    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? recommendations.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === recommendations.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="card">
            {/* {recommendations.length > 0 ? ( */}
            {recommendations.length > 0 ? (
                <>
                    <div className="card-content">
                        <img className="cardImage" src={recommendations[currentIndex].imageLink} alt={recommendations[currentIndex].title} />
                        <h3>{recommendations[currentIndex].title}</h3>
                        {/* <img src="http://hips.hearstapps.com/hmg-prod/images/little-cute-maltipoo-puppy-royalty-free-image-1652926025.jpg?crop=0.444xw:1.00xh;0.129xw,0&resize=980:*" alt="My Image" /> */}
                    </div>
                    <div className="card-buttons">
                        <button onClick={handlePrevious}>&lt;</button>
                        <h3 className="card-counter">{currentIndex + 1}</h3>
                        <button onClick={handleNext}>&gt;</button>
                    </div>
                </>
            ) : (
                <p>No recommendations available</p>
            )}
        </div>
    );
};
