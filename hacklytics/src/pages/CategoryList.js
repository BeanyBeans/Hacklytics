import Movie from '../components/Movie';
import Random from '../components/Random';
import Music from '../components/Music';
import "../pages/CategoryList.css"
import React from 'react';

export default function CategoryList() {
    return (
        <div className = 'parent'> 
            <div className = 'child1'> 
                <Movie />
            </div>
            <div className ='child2'>
                <Random />
            </div>
            <div className='child3'>
                <Music /> 
            </div>
        </div>
      );
}