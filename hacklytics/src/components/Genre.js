import React from 'react';

export default function Genre({ genre, disabled }) {
  return (
    <select className="dropdown" disabled={disabled}>
      <option value={genre} disabled>{genre}</option>
      {/* Populate genre options */}
    </select>
  );
}