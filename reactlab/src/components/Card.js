import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <>
      <VStack backgroundColor='#fff' textColor='#000' rounded='12px'>
        <Image src={imageSrc} rounded='12px' />
        <VStack alignItems='flex-start' padding='24px'>
          <Heading>{title}</Heading>
          <Text>{description}</Text>

          <HStack>
            <Text padding='12px'>
              See more <FontAwesomeIcon icon={faArrowRight} size='1x' />{" "}
            </Text>
          </HStack>
        </VStack>
      </VStack>
    </>
  );
};

export default Card;
