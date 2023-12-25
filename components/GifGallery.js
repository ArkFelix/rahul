import React, { useState, useEffect } from 'react';
import '../styles/GifGallery.css'; // Adjust the path as necessary
import { searchGifs } from '../services/giphyService';

const GifGallery = ({ searchTerm }) => {
    const [gifs, setGifs] = useState([]);

    useEffect(() => {
        if (searchTerm) {
            const fetchGifs = async () => {
                const results = await searchGifs(searchTerm);
                setGifs(results);
            };

            fetchGifs();
        } else {
            setGifs([]); // Clear the gallery if the search term is empty
        }
    }, [searchTerm]);

    return (
        <div>
            {gifs.length > 0 ? (
                <div className="gif-gallery">
                    {gifs.map((gif) => (
                        <img key={gif.id} src={gif.images.fixed_height.url} alt={gif.title} style={{ margin: '5px' }} />
                    ))}
                </div>
            ) : (
                <p>No GIFs found. Try searching for something else!</p>
            )}
        </div>
    );
};

export default GifGallery;