import React from 'react';
import { Text } from '@chakra-ui/react';

const NavLink = ({text}) => {
    return (
        <div className='nav-link'>
            <Text fontSize='.95rem'>{text}</Text>
        </div>
    )
}

export default NavLink