import { Image } from '@chakra-ui/image';
import { Box, Text } from '@chakra-ui/layout';
import React from 'react';
import './Card.css';

const Card = ({ brand, name, price, image }) => {
  return (
    <Box>
      <Image src={image} width='300px' height='300px' />
      <Text className='brand'>{brand}💛 </Text>
      <Text className='name'>{name}</Text>
      <Text className='price'>Rs {price}</Text>
    </Box>
  );
};

export default Card;
