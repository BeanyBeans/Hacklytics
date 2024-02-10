import React from 'react';
import './Category.css'; // Import CSS file for styling
import { ReactComponent as RandomPic } from '../images/random.svg'; // Importing SVG image

export default function Random() {
    return (
        // <div className="category-container">
        //     <RandomPic className="category-image" />
        //     <div className="category-name">{"Random"}</div>
        // </div>
        <div className="container">
            <RandomPic className="image" />
            <div className="name">{"Random"}</div>
        </div>
    );
}