import React from 'react';
import './Category.css'; // Import CSS file for styling
import { ReactComponent as RandomPic } from '../images/random.svg'; // Importing SVG image

export default function Random() {
    return (
        <div className="random">
            <RandomPic className="category-image" />
            <div className="category">{"Random"}</div>
        </div>
    );
}