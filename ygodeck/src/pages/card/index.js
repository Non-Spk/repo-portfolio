import React from "react";
import { Box, Image, Center, Grid, GridItem } from "@chakra-ui/react";
import { baseICON } from "../../utils/constant";
import CardDetail from "../../components/CardDetail";
import FavoriteCard from "../../components/FavoriteCard";

function CardPage() {
  return (
    <Box h="100vh" overflow="hidden">
      <Grid
        templateAreas={`"header header"
                        "nav main"
                        "footer footer"`}
        gridTemplateRows={"auto 1fr auto"}
        gridTemplateColumns={"auto 1fr"}
        minH="100vh"
        gap="10px"
        color="primary.100"
        fontWeight="bold"
        overflow="hidden"
      >
        {/* Header */}
        <GridItem area={"header"} zIndex={11}>
          <Box
            position="sticky"
            top="0"
            left="0"
            right="0"
            w="full"
            p="4"
            boxShadow="sm"
            transition="box-shadow 0.2s, background-color 0.2s"
            zIndex={12}
          >
            <Center>
              <Image src={baseICON} alt="ICON" boxSize="100px" />
            </Center>
          </Box>
        </GridItem>

        {/* Favorite Content */}
        <GridItem pl="2" area={"nav"} zIndex={1}>
          <Box
            position="sticky"
            top="100px" // Adjust based on header height
            left="0"
            right="0"
            w="full"
            h="calc(100vh - 150px)" // Adjust based on header height and footer height
            overflowY="auto"
            p="2"
            boxShadow="sm"
            transition="box-shadow 0.2s ease, background-color 0.2s ease"
          >
            <FavoriteCard />
          </Box>
        </GridItem>

        {/* Main Content */}
        <GridItem pl="2" area={"main"}>
          <Box
            overflowY="auto"
            h="calc(100vh - 150px)" // Adjust based on header height and footer height
            p="2"
          >
            <Center>
              <Box maxW="1200px" w="full" p="4" boxShadow="lg">
                <CardDetail />
              </Box>
            </Center>
          </Box>
        </GridItem>

        {/* Footer */}
        <GridItem pl="2" area={"footer"} zIndex={1}>
          <Box w="full" p="4" boxShadow="sm" textAlign="center">
            Create by MrN
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default CardPage;
