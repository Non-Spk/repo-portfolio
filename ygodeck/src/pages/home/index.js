import { Box, Image, Flex, Grid, Center } from "@chakra-ui/react";
import { baseICON } from "../../utils/constant";
import SearchForm from "../../components/SearchForm";
import { useCardListStore } from "../../stores/CardListStore";
import CardShow from "../../components/CardList";

function HomePage() {
  const { card } = useCardListStore();

  return (
    <Box w="90%" maxW="1500px" margin="auto">
      <Flex>
        <Image src={baseICON} alt="ICON" boxSize="100px" />
        <SearchForm />
      </Flex>
      <Box height="40px" />
      <Center>
        <Grid templateColumns="repeat(5,1fr)" columnGap={6} rowGap="200px">
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
  );
}

export default HomePage;
