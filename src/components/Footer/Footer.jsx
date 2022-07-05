import React from 'react';
import {Box, Text} from '@chakra-ui/react';
import whitelogo from '../../images/whitelogo.svg';
import phone from '../../images/icon-phone.svg';
import email from '../../images/icon-email.svg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebookF, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons'
import FooterBox from './FooterBox';
import './Footer.css';

const Footer = () => {
    return(
        <Box
        px={{sm: '2rem', lg: '4rem'}}
        pt='3.5rem'
        backgroundColor='#07043b'
        color='white'
        >
            
            
            <img className='whiteLogo' src={whitelogo} alt="" />
            <Box
            w={{lg: '100%'}}
            mt={{lg: '2rem'}}
            display={{lg: 'flex'}}
            flexDirection={{lg: 'row'}}
            justifyContent={{lg: 'flex-start'}}
            alignItems={{lg: 'flex-start'}}> 
                <Box
                w={{lg: '30%'}}
                h={{lg: '10rem'}}
                display={{lg: 'flex'}}
                flexDirection={{lg: 'column'}}
                
                alignItems={{lg: 'flex-start'}}>
                  <Box
                display='flex'
                alignItems='center'
                flexDirection='row'
                mt={{sm: '2rem', lg: '0rem'}}
                mb='.75rem'>
                    <img src={phone} alt="" />
                    <Text
                    ml='15px'>Phone: +1-543-123-4567</Text>
                  </Box>
                  <Box
                 display='flex'
                 alignItems='center'
                 flexDirection='row'
                 mb='2.5rem'>
                    <img src={email} alt="" />
                    <Text
                    ml='15px'>example@fylo.com</Text>
                  </Box>
                </Box>
               
               
           
            
                <FooterBox text1='About us' text2='Jobs' text3='Press' text4='Blog' />
                <FooterBox text1='Contact Us' text2='Terms' text3='Privacy' text4={undefined}/>
                <Box
                w={{sm: '100%', lg: '25%'}}
                pb='40px'
                
                display='flex'
                flexDirection='row'
                justifyContent={{sm: 'center', lg: 'flex-start'}}
                alignItems='center'>
                    <FontAwesomeIcon className='social-icons' icon={faFacebookF}/>
                    <FontAwesomeIcon className='social-icons' icon={faTwitter}/>
                    <FontAwesomeIcon className='social-icons' icon={faInstagram}/>
                    
                </Box>
            </Box>
           
            
           
        </Box>
    )
}

export default Footer