import axios from 'axios';

const API_URL_MASTER_ARMORS = 'https://mhw-db.com/armor/sets?q={"rank":"master"}';

export const getMasterArmors = async () => {
    try {
        const response = await axios.get(API_URL_MASTER_ARMORS);
        return response.data;
    } catch (error) {
        console.error('Error fetching armors:', error);
        return [];
    }
};