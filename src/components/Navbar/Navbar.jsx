import React from "react";
import {  Box } from "@chakra-ui/react";
import logo from "../../images/logo.svg"
import "./NavBar.css"
import NavLink from "../NavLink/NavLink";

const NavBar = () => {
    return (
        <Box display='flex' alignItems='center'  w='100%' h='70px' pl={8}>
          <Box 
            display='flex'
            justifyContent='center' 
            alignItems='center' 
            w='30%' 
            h='100%'>
                <img className='logo' src={logo} alt="logo" />
          </Box>
          <Box 
            display='flex' 
            justifyContent='flex-end'
            alignItems='center'
            w='70%' 
            h='100%'
            mr={{lg: '25px'}}
        
            >
            <NavLink text='Features'/> 
            <NavLink text='Team'/>
            <NavLink text='Sign In'/>
          </Box>
         
        </Box>
    )
}

export default NavBar