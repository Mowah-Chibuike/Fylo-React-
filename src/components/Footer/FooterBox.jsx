import React from 'react';
import {Box} from '@chakra-ui/react';

import FooterLink from './FooterLink';

const FooterBox = ({text1, text2, text3, text4}) => {
    return(
        <Box
        className='footer-box'
        mb={{sm:'2rem', lg: '4rem'}}
        w={{lg: '20%'}}
        h={{lg: '10rem'}}
        display={{lg: 'flex'}}
        alignItems={{lg: 'flex-start'}}
        flexDirection={{lg: 'column'}}>
            <FooterLink text={text1}/>
            <FooterLink text={text2}/>
            <FooterLink text={text3}/>
            <FooterLink text={text4}/>
    </Box>
    )
}

export default FooterBox