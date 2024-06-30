import { Link } from "react-router-dom";
import { Image, GridItem } from "@chakra-ui/react";

function CardShow({ ImageURL, name }) {
  return (
    <GridItem boxSize="sm">
      <Link to={`/CardDetail/${name}`}>
        <Image src={ImageURL} alt={name} borderRadius="2xl" />
      </Link>
    </GridItem>
  );
}

export default CardShow;
