import React from 'react';
import { Box, Text, Heading } from '@chakra-ui/react';
import second from '../../images/illustration-2.svg'
import bgImage from '../../images/bg-curve-mobile.svg'
import bgImage2 from '../../images/bg-curve-desktop.svg'
import arrow from '../../images/icon-arrow.svg'
import Quotes from '../../images/icon-quotes.svg'
import Avatar from '../../images/avatar-testimonial.jpg'
import './Productive.css'

const Productive = () => {
    return(
        <Box
        className='prod-main'
        display={{sm:'flex', lg:'flex'}}
        justifyContent={{sm:'center', lg: 'center'}}
        flexDirection= {{sm:'column', lg: 'row-reverse'}}
        alignItems={{sm:'center', lg: 'flex-start' }}
        w='100%'
        px='30px'
        mt='5rem'
        pt={{sm:'0px', lg: '10rem'}}
        backgroundImage={{sm: bgImage, lg: bgImage2}}
        backgroundRepeat={{sm: 'no-repeat', lg: 'no-repeat'}}
        backgroundSize={{sm: 'cover', lg: 'cover'}}
        backgroundPosition={{sm: 'top center', lg: 'top-center'}}>
            
            <img className='second-image' src={second} alt="" />
            <Box
            w={{base: '100%', lg: '40%'}}
            display= {{lg: 'flex'}}
            flexDirection={{lg: 'column'}}
            justifyContent={{lg: 'flex-start'}}
            mr={{lg: '30px'}}>
            
            <Text 
            className='second-header' 
            fontSize={{sm: '1.2rem', lg: '1.5rem'}}
            textAlign={{ sm: 'center', lg: 'left'}}
            color='#00002a'
            mb={{sm: '1.5rem', lg: '1rem'}}>
                Stay productive, wherever you are</Text>
            
            <Text
            className='paragragh'
            fontSize='1rem'
            textAlign='left'
            color='#686576'
            width='100%'
            mb='1rem'>
                Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</Text>
            <Text
            className='paragragh'
            fontSize='1rem'
            textAlign='left'
            color='#686576'
            width='100%'>
                Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required!</Text>
            <Box
            display='flex'
            justifyContent='center'
            alignItems='center'
            flexDirection='row'
            width={{sm: '40%', lg: '35%'}}
            textAlign={{sm:'center', lg: 'left'}}
            height='20px'
            pb='4px'
            mx={{sm: 'auto', lg: '0px'}}
            my='2.5rem'
            borderBottom='1px solid #53978a'>
                <Text
                color='#53978a'
                mr='8px'
                lineHeight='16px'
                textAlign={{sm:'center', lg: 'left'}}>
                    See how Fylo works
                </Text>
                <img src={arrow} alt="" />
            </Box>
            <Box
            width='80%'
            px='2rem'
            py='2rem'
            mb='6rem'
            borderRadius='7px'
            backgroundColor='white'
            boxShadow='0px 0px 15px 0.5px #e7e7e9'
            mx={{sm: 'auto', lg: '0px'}}>
                <img className='quotes' src={Quotes} alt="" />
                <Text
                className='testimonial'
                fontSize='.95rem'
                my='.65rem'>Fylo has improved our team productivity by an order of magnitude. Since making the switch, our team has become a well-oiled collaboration machine</Text>
                <Box
                display='flex'
                flexDirection='row'
                alignItems='center'>
                    <img className='avatar' src={Avatar} alt="" />
                    <Box
                    ml='7px'>
                        <Heading
                        fontSize='.75rem'
                        mb='0.5px'>Kyle Burton</Heading>
                        <Text
                        fontSize='.65rem'
                        mt='0px'>Founder & CEO Huddle</Text>
                    </Box>

                </Box>
            </Box>
            </Box>
            

            </Box>
            
           

            
            
        
    )
}

export default Productive