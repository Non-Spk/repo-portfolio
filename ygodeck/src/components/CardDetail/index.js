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
    <Box w="90%" maxW="1500px" margin="auto">
      <Box px={4} m={10}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Link to={`/`}>
            <Button colorScheme="teal" variant="solid" size="lg" fontSize="4xl">
              HOME
            </Button>
          </Link>
          <HStack spacing={8} alignItems={"center"}>
            <Button
              onClick={handdleClick}
              colorScheme="teal"
              variant="solid"
              size="lg"
              fontSize="4xl"
            >
              ADD FAVORITE
            </Button>
          </HStack>
        </Flex>
      </Box>
      <Grid
        h="1vh"
        templateRows="repeat(8,1fr)"
        templateColumns="repeat(4,1fr)"
        columnGap={20}
        rowGap={10}
      >
        <GridItem rowSpan={7} colSpan={2}>
          <Image src={data.ImageURL} alt={`image-${data.name}`} mb={10} />
        </GridItem>
        <GridItem rowSpan={1} colSpan={2}>
          <Heading as="h1" size="4xl">
            <Text>{data.name}</Text>
          </Heading>
        </GridItem>
        <GridItem rowSpan={1} colSpan={2}>
          <Text fontSize="4xl">{`Attribute : ${data.attribute}`}</Text>
        </GridItem>
        <GridItem rowSpan={1} colSpan={2}>
          <Text fontSize="4xl">{`Level : ${data.level}`}</Text>
        </GridItem>
        <GridItem rowSpan={1} colSpan={2}>
          <Text fontSize="4xl">{`Type : ${data.type}`}</Text>
        </GridItem>
        <GridItem rowSpan={1} colSpan={2}>
          <Text fontSize="4xl">{data.desc}</Text>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <Text fontSize="4xl">{`ATK : ${data.atk}`}</Text>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <Text fontSize="4xl">{`DEF : ${data.def}`}</Text>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default CardDetail;
