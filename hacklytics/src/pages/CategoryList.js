import Movie from '../components/Movie';
import Random from '../components/Random';
import Music from '../components/Music';

import React from 'react';

export default function CategoryList() {
    return (
        <div>
            <Movie />
            <Random />
            <Music />
        </div>
      );
}