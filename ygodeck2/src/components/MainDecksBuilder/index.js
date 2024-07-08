import { useState, useEffect, useRef } from "react";
import { Grid, GridItem, Box, Heading, Center } from "@chakra-ui/react";
import CardList from "../../components/CardList";
import FavoriteList from "../../components/FavoriteList";
import { useCardListStore } from "../../stores/CardListStore";
import { useFavoriteStore } from "../../stores/CardFavStore";
import DetailCard from "../../components/DetailCard";
import { setDeckType } from "../../utils/optionList";
import {
  useMainDeckCard,
  useExtraDeckCard,
  useSideDeckCard
} from "../../components/DeckList/DeckList.hook";
import { useDeckStore } from "../../stores/CardDeckStore";
import DeckList from "../../components/DeckList";

function MainDecksBuilder() {
  const { card } = useCardListStore();
  const { Favorite } = useFavoriteStore();
  const { setMainDeckCard, editMainDeckCard } = useMainDeckCard();
  const { setExtraDeckCard, editExtraDeckCard } = useExtraDeckCard();
  const { setSideDeckCard, editSideDeckCard } = useSideDeckCard();
  const { MainDeck, ExtraDeck, SideDeck } = useDeckStore();
  const [loadedCards, setLoadedCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [page, setPage] = useState(0);
  const pageSize = 15;
  const loadMoreRef = useRef(null);

  useEffect(() => {
    const initialLoad = card.data.slice(0, pageSize);
    setLoadedCards(initialLoad);
    setSelectedCard(card.data[0]);
  }, [card.data]);

  useEffect(() => {
    if (page > 0) {
      const nextPageLoad = card.data.slice(
        page * pageSize,
        (page + 1) * pageSize
      );
      setLoadedCards((prevCards) => [...prevCards, ...nextPageLoad]);
    }
  }, [page, card.data]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPage((prevPage) => prevPage + 1);
        }
      },
      { threshold: 1.0 }
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => {
      if (loadMoreRef.current) {
        observer.unobserve(loadMoreRef.current);
      }
    };
  }, []);

  return (
    <Grid
      templateAreas={`
        "detail main card"
        "detail extra card"
        "detail side fav"`}
      gridTemplateRows={"auto auto auto"}
      gridTemplateColumns={"1fr 2fr auto"}
      h="85vh"
      gap="1"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem pl="2" bg="pink.300" area={"detail"}>
        <DetailCard
          data={selectedCard}
          onClick={() => {
            const { mainDeckTypes, extraDeckTypes } = setDeckType;

            if (!setDeckType.otherTypes.includes(selectedCard.type)) {
              if (
                mainDeckTypes.includes(selectedCard.type) &&
                MainDeck.data.length < 40
              ) {
                setMainDeckCard(selectedCard);
              } else if (
                extraDeckTypes.includes(selectedCard.type) &&
                ExtraDeck.data.length < 15
              ) {
                setExtraDeckCard(selectedCard);
              } else if (
                extraDeckTypes.includes(selectedCard.type) &&
                SideDeck.data.length < 15
              ) {
                setSideDeckCard(selectedCard);
              }
            }
          }}
        />
      </GridItem>
      <GridItem pl="2" bg="yellow.300" area={"main"}>
        <Heading>{`Main Deck : ${MainDeck.data.length}/40`}</Heading>
        <Box gap={4} display="flex" flexWrap="wrap">
          {MainDeck.data.map((item, index) => (
            <DeckList
              key={`card-${item.id}`}
              data={item}
              index={index}
              edit={(index) => {
                editMainDeckCard(index);
              }}
            />
          ))}
        </Box>
      </GridItem>
      <GridItem pl="2" bg="red.300" area={"extra"}>
        <Heading>{`Extra Deck : ${ExtraDeck.data.length}/15`}</Heading>
        <Box gap={4} display="flex" flexWrap="wrap">
          {ExtraDeck.data.map((item, index) => (
            <DeckList
              key={`card-${item.id}`}
              data={item}
              index={index}
              edit={(index) => {
                editExtraDeckCard(index);
              }}
            />
          ))}
        </Box>
      </GridItem>
      <GridItem pl="2" bg="blue.300" area={"side"}>
        <Heading>{`Side Deck : ${SideDeck.data.length}/15`}</Heading>
        <Box gap={4} display="flex" flexWrap="wrap">
          {SideDeck.data.map((item, index) => (
            <DeckList
              key={`card-${item.id}`}
              data={item}
              index={index}
              edit={(index) => {
                editSideDeckCard(index);
              }}
            />
          ))}
        </Box>
      </GridItem>
      <GridItem pl="2" bg="green.300" area={"card"}>
        <Heading>CardList</Heading>
        <Box
          bg="white"
          position="sticky"
          top="0"
          right="0"
          left="0"
          w="100%"
          h="calc(50vh)"
          overflowY="auto"
          p="2"
          boxShadow="sm"
          transition="box-shadow 0.2s ease, background-color 0.2s ease"
        >
          {loadedCards.map((item) => (
            <CardList
              key={`card-${item.id}`}
              data={item}
              onClick={() => setSelectedCard(item)}
            />
          ))}
          <div ref={loadMoreRef} />
        </Box>
      </GridItem>
      <GridItem pl="2" bg="purple.300" area={"fav"}>
        <Heading>FavoriteList</Heading>
        <Box
          bg="white"
          position="sticky"
          top="0"
          right="0"
          left="0"
          w="100%"
          h="calc(25vh)"
          overflowY="auto"
          p="2"
          boxShadow="sm"
          transition="box-shadow 0.2s ease, background-color 0.2s ease"
        >
          {Favorite.data.map((item, index) => (
            <FavoriteList
              key={`card-${item.id}`}
              data={item}
              index={index}
              onClick={() => setSelectedCard(item)}
            />
          ))}
        </Box>
      </GridItem>
    </Grid>
  );
}

export default MainDecksBuilder;
