import axios from "axios";
import { baseURL } from "../utils/constant";

const cardDetailService = {
  getCardDetail: async (name) => {
    try {
      const response = await axios.get(`${baseURL}?name=${name}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching cardlist:", error);
      throw error;
    }
  }
};

export default cardDetailService;
export { cardDetailService };
