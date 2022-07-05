import React from 'react';
import { Button } from '@chakra-ui/react';

const Btn = ({width, text, left, right, onClick}) => {
    return (
        <Button onClick={onClick} ml={{lg: left}} mr={{lg: right}} width={width} color='white' bg='#2f65f9' variant='solid' _hover={{boxShadow: '0px 0px 8px 1px #000'}}>{text}</Button>
    )
}

export default Btn