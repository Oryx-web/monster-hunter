import axios from 'axios';

const API_URL_HIGH_ARMORS = 'https://mhw-db.com/armor/sets?q={"rank":"high"}';

export const getHighArmors = async () => {
    try {
        const response = await axios.get(API_URL_HIGH_ARMORS);
        return response.data;
    } catch (error) {
        console.error('Error fetching armors:', error);
        return [];
    }
};