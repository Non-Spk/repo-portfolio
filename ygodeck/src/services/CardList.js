import axios from "axios";
import { baseURL } from "../utils/constant";

const cardListService = {
  getCardList: async () => {
    try {
      const response = await axios.get(`${baseURL}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching cardlist:", error);
      throw error;
    }
  }
};

export default cardListService;
export { cardListService };
