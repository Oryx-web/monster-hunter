import axios from 'axios';

const API_URL_MONSTERS = 'https://mhw-db.com/monsters?q={"type":"small"}';

export const getSmallMonsters = async () => {
    try {
        const response = await axios.get(API_URL_MONSTERS);
        return response.data;
    } catch (error) {
        console.error('Error fetching monsters:', error);
        return [];
    }
};

// ?q={"type":"large"}