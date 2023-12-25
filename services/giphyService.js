import axios from 'axios';

// Replace with your actual GIPHY API key
const GIPHY_API_KEY = 'SQ5gjUTm9jKjrNaYHQF5W9qKJ2EWv0vj';

// Function to search GIFs using the GIPHY API
export const searchGifs = async (query, limit = 25, offset = 0) => {
    try {
        const response = await axios.get(`https://api.giphy.com/v1/gifs/search`, {
            params: {
                api_key: GIPHY_API_KEY,
                q: query,
                limit,
                offset,
                rating: 'g' // Optional: Adjust the rating if needed
            }
        });
        return response.data.data; // Returns the list of GIFs
    } catch (error) {
        console.error('Error fetching GIFs from GIPHY:', error);
        return []; // Returns an empty array in case of an error
    }
};

// You can add more functions related to GIPHY API here if needed