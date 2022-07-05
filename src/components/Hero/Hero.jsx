import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import NavBar from '../Navbar/Navbar';
import first from '../../images/illustration-1.svg'
import InputEl from '../InputEl/InputEl';
import './Hero.css'

const Hero = () => {
    return (
        <Box
        w='100%'
        pt={4}
        >
          <NavBar/>
          <Box 
            display='flex'
            flexDirection={{sm: 'column', lg: 'row-reverse'}}
            justifyContent='center'
            alignItems='center'
            w='100%' 
            pl='30px'
            pr='30px'
            mt='5rem'>
            <img className='hero-image' src={first} alt="" />
            <Box
            w={{sm: '100%', lg: '40%'}}
            mr={{lg: '30px'}}>
            <Text 
              className='hero-text1'
              fontSize='2rem'
              lineHeight='2.5rem'
              textAlign={{sm: 'center', lg: 'left'}}
              
              >
                All your files in one secure location, accessible anywhere.
            </Text>
            <Text
            className='paragraph'
            fontSize='1rem'
            textAlign={{sm: 'center', lg: 'left'}}
            mt={{sm: '25px'}}>
              Fylo stores your most important files in one secure location. Access them wherever you need, share and collaborate with friends, family and co-workers.</Text>
            <InputEl content='Get Started' placeholder='Enter your email' lgButtonWidth='30%' flexDirection='row' marginLeft='20px'/>
            </Box>
           
          </Box>
        </Box>
    )
}

export default Hero