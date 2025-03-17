import axios from 'axios';

const API_URL_LOW_ARMORS = 'https://mhw-db.com/armor/sets?q={"rank":"low"}';

export const getLowArmors = async () => {
    try {
        const response = await axios.get(API_URL_LOW_ARMORS);
        return response.data;
    } catch (error) {
        console.error('Error fetching armors:', error);
        return [];
    }
};