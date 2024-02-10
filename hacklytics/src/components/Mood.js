import React from 'react';

export default function Mood({ mood, disabled }) {
    return (
        <select className="dropdown" disabled={disabled}>
          <option value={mood} disabled>{mood}</option>
          {/* Populate mood options */}
        </select>
    );
}