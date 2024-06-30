import React from "react";
import { Box, Image, Center, Grid, GridItem } from "@chakra-ui/react";
import { baseICON } from "../../utils/constant";
import CardDetail from "../../components/CardDetail";
import FavoriteCard from "../../components/FavoriteCard";

function CardPage() {
  return (
    <Box w="90%" maxW="100%" margin="auto">
      <Center>
        <Image src={baseICON} alt="ICON" boxSize="300px" />
      </Center>
      <Grid templateColumns="repeat(5,1fr)" gap={5}>
        <GridItem colSpan={1}>
          <FavoriteCard />
        </GridItem>
        <GridItem colSpan={4}>
          <CardDetail />
        </GridItem>
      </Grid>
    </Box>
  );
}

export default CardPage;
