import React from 'react';
import './Category.css'; // Import CSS file for styling
import { ReactComponent as MusicPic } from '../images/music.svg'; // Importing SVG image

export default function Music() {
    return (
        <div className="category-container">
            <MusicPic className="category-image" />
            <div className="category-name">{"Music"}</div>
        </div>
    );
}