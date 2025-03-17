import axios from 'axios';

const API_URL_LARGE_MONSTERS = 'https://mhw-db.com/monsters?q={"type":"large"}';

export const getLargeMonsters = async () => {
    try {
        const response = await axios.get(API_URL_LARGE_MONSTERS);
        return response.data;
    } catch (error) {
        console.error('Error fetching monsters:', error);
        return [];
    }
};

// ?q={"type":"large"}