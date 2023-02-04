import * as React from 'react';

import logo from "./logo.png"

import { AppBar, Toolbar, Box } from "@mui/material"
import {toolBar, image}from "./NavStyles"



export default function NavBar() {
  return (
    
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar sx={toolBar}>
          <Box component="img" src={logo} alt='logo' sx={image}/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}