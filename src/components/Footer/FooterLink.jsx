import React from 'react';
import { Text } from '@chakra-ui/react';

const FooterLink = ({text}) => {
    return (
        <div className='footer-link'>
            <Text fontSize='.95rem' _hover={{color: 'blue'}}>{text}</Text>
        </div>
    )
}

export default FooterLink
