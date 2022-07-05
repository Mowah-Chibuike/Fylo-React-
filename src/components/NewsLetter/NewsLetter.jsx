import React from 'react';
import {Box, Text} from '@chakra-ui/react';
import InputEl from '../InputEl/InputEl';
import './NewsLetter.css'

const NewsLetter = () => {
    return (
        <Box
        className='news'
        w='100%'
        h='50%'
        backgroundColor='#575989'
        color='white'
        textAlign='center'
        display={{sm:'flex', lg: 'flex'}}
        flexDirection={{sm: 'column',lg: 'row'}}
        justifyContent={{sm:'center', lg: 'center'}}
        alignItems={{sm:'center', lg:'flex-start'}}>
            <Box
            w={{sm:'100%', lg: '80%'}}
            mr={{lg: '25rem'}}>
            <Text
            className='sign-up-header'
            fontSize='1.5rem'
            fontWeight='700'
            mb='1rem'
            textAlign={{sm:'center', lg: 'left'}}>Get early access today</Text>
            <Text
            className='sign-up-content'
            fontSize='1rem'
            fontWeight='400'
            textAlign={{sm:'center', lg: 'left'}}>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team will be happy to help you</Text>
            </Box>
            
            <InputEl content='Get Started For Free' placeholder='email@example.com' lgButtonWidth='50%' flexDirection='column' marginLeft='0px' marginRight='auto'/>
        </Box>
    )
}

export default NewsLetter