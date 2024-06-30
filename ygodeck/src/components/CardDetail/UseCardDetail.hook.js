import { useEffect, useState } from "react";
import { cardDetailService } from "../../services";

export function useCardDetail(name) {
  const [cardDetail, setCardDetail] = useState({
    data: {},
    loading: true,
    error: null
  });

  useEffect(() => {
    const callData = async (name) => {
      try {
        const response = await cardDetailService.getCardDetail(name);
        const data = response.data[0];
        setCardDetail({ data, loading: false, error: null });
      } catch (error) {
        setCardDetail({ data: {}, loading: false, error });
        console.error("Error fetching data", error);
      }
    };

    if (name) {
      callData(name);
    }
  }, [name]);

  return cardDetail;
}
