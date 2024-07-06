import React from "react";
import {
  Box,
  Image,
  Center,
  Grid,
  GridItem,
  Heading,
  Text,
  Button,
  Flex,
  HStack
} from "@chakra-ui/react";
import { useParams, Link } from "react-router-dom";
import { useCardDetail } from "../../components/CardDetail/UseCardDetail.hook";
import useFavoriteCard from "../FavoriteCard/FavoriteCard.hook";

function CardDetail() {
  const { name } = useParams();
  const cardDetail = useCardDetail(name);
  const { setFavoriteCard } = useFavoriteCard();

  if (cardDetail.loading) {
    return <Center>Loading...</Center>;
  }

  if (cardDetail.error) {
    return <Center>Error: {cardDetail.error.message}</Center>;
  }

  const data = {
    name: cardDetail.data?.name || "",
    level: cardDetail.data?.level || "",
    attribute: cardDetail.data?.attribute || "",
    type: cardDetail.data?.type || "",
    desc: cardDetail.data?.desc || "",
    atk: cardDetail.data?.atk || "",
    def: cardDetail.data?.def || "",
    ImageURL: cardDetail.data?.card_images?.[0]?.image_url || ""
  };

  const handdleClick = () => {
    setFavoriteCard(cardDetail.data);
  };

  return (
    <Box maxW="1500px" mx="auto" my={10} px={4}>
      <Flex justify="space-between" align="center" mb={4}>
        <Link to={`/`}>
          <Button colorScheme="teal" variant="solid" size="lg" fontSize="xl">
            HOME
          </Button>
        </Link>
        <HStack spacing={4}>
          <Button
            onClick={handdleClick}
            colorScheme="teal"
            variant="solid"
            size="lg"
            fontSize="xl"
          >
            ADD FAVORITE
          </Button>
        </HStack>
      </Flex>
      <Grid
        templateColumns="repeat(4, 1fr)"
        gap={6}
        alignItems="center"
        justifyItems="center"
      >
        <GridItem colSpan={2}>
          <Image src={data.ImageURL} alt={`image-${data.name}`} />
        </GridItem>
        <GridItem colSpan={2} gap={5}>
          <Heading as="h1" size="xl" mb={2}>
            {data.name}
          </Heading>
          <Text fontSize="xl">{`Attribute: ${data.attribute}`}</Text>
          <Text fontSize="xl">{`Level: ${data.level}`}</Text>
          <Text fontSize="xl">{`Type: ${data.type}`}</Text>
          <Text fontSize="xl">{data.desc}</Text>
          <Text fontSize="xl">{`ATK: ${data.atk}`}</Text>
          <Text fontSize="xl">{`DEF: ${data.def}`}</Text>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default CardDetail;
