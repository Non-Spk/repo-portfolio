import { useDeckStore } from "../../stores/CardDeckStore";

const useFavoriteCard = () => {
  const { setDeck, Deck } = useDeckStore();

  const setFavoriteCard = (data) => {
    setDeck({
      data: [...Deck.data, data],
      loading: false,
      error: null
    });
    console.log("FavoriteCard", Deck);
  };

  const editFavoriteCard = (index) => {
    const newData = Deck.data.filter((item, idx) => idx !== index);

    setDeck({
      data: newData,
      loading: false,
      error: null
    });
    console.log("FavoriteCard", Deck);
  };

  return { setFavoriteCard, editFavoriteCard };
};

export default useFavoriteCard;
