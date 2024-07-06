import { Image, Box, Flex, Grid, Center, GridItem } from "@chakra-ui/react";
import { baseICON } from "../../utils/constant";
import SearchForm from "../../components/SearchForm";
import { useCardListStore } from "../../stores/CardListStore";
import CardShow from "../../components/CardList";
import FavoriteCard from "../../components/FavoriteCard";

function HomePage() {
  const { card } = useCardListStore();

  return (
    <Box h="100vh" overflow="hidden">
      <Grid
        templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
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
              <Flex align="center">
                <Image src={baseICON} alt="ICON" boxSize="80px" />
                <SearchForm />
              </Flex>
            </Center>
          </Box>
        </GridItem>

        {/* Favorite Content */}
        <GridItem pl="2" area={"nav"} zIndex={1}>
          <Box
            position="sticky"
            top="0"
            left="0"
            right="0"
            w="full"
            h="calc(100vh - 150px)"
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
          <Box overflowY="auto" maxH="calc(100vh - 120px)">
            <Center>
              <Grid
                templateColumns="repeat(5,1fr)"
                columnGap={6}
                rowGap="200px"
              >
                {card.data.map((item) => {
                  const ImageURL = item.card_images[0].image_url;
                  const name = item.name;
                  return (
                    <CardShow
                      key={`card-${item.id}`}
                      ImageURL={ImageURL}
                      name={name}
                    />
                  );
                })}
              </Grid>
            </Center>
          </Box>
        </GridItem>

        {/* Footer */}
        <GridItem pl="2" area={"footer"}>
          Create by MrN
        </GridItem>
      </Grid>
    </Box>
  );
}

export default HomePage;
