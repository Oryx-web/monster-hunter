import axios from 'axios';

const API_URL_WEAPONS = 'https://mhw-db.com/weapons';

export const getWeapons = async (type) => {
    try {
        const query = encodeURIComponent(JSON.stringify({ type }));
        const response = await axios.get(`${API_URL_WEAPONS}?q=${query}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching weapons:', error);
        return [];
    }
};
// ?q={"type":"great-sword"}