import { Image } from "@chakra-ui/react";

function DeckList({ data, index, edit }) {
  const imageUrl = data?.card_images?.[0]?.image_url_small || "";
  const cardName = data?.name || "";

  const handleClick = () => {
    if (typeof edit === "function") {
      edit(index);
    } else {
      console.error("edit is not a function");
    }
  };

  return (
    <Image
      cursor="pointer"
      h="80px"
      w="auto"
      src={imageUrl}
      alt={cardName}
      onClick={handleClick}
    />
  );
}

export default DeckList;
