//deleteknapp
import React from 'react';

export function DeleteFilm({ onDelete }) {
    return (
        <button onClick={onDelete} className='bg-red-500 p-1 text-white rounded'>
            Radera
        </button>
    );
}