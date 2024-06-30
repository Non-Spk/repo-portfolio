import { Box, Image, Center, VStack, Heading, Text } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { useDeckStore } from "../../stores/CardDeckStore";
import useFavoriteCard from "../FavoriteCard/FavoriteCard.hook";

const FavoriteCard = () => {
  const { Deck } = useDeckStore();
  const { editFavoriteCard } = useFavoriteCard();

  const handdleClick = (index) => () => {
    editFavoriteCard(index);
  };

  return (
    <Box>
      <Center>
        <VStack gap={10}>
          <Heading as="h1" size="4xl">
            <Text>Favorite Card</Text>
          </Heading>
          {Deck.data.map((item, index) => {
            const ImageURL = item.card_images[0].image_url;
            const name = item.name;
            return (
              <Box position="relative">
                <Center>
                  <Image src={ImageURL} alt={name} w="50%" borderRadius="2xl" />
                </Center>
                <CloseIcon
                  onClick={handdleClick(index)}
                  cursor="pointer"
                  position="absolute"
                  top="0"
                  left="0"
                  w="50px"
                  h="50px"
                  transform="translate(50%, -50%)"
                  color="white"
                  bg="black"
                  borderRadius="full"
                  p={1}
                />
              </Box>
            );
          })}
        </VStack>
      </Center>
    </Box>
  );
};

export default FavoriteCard;
