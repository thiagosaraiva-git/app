'use client';

import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Badge } from '@mui/material';
import { ShoppingCart, Favorite } from '@mui/icons-material';


const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    My Store
                </Typography>
                <IconButton color="inherit">
                    <Badge badgeContent={0} color="secondary">
                        <ShoppingCart />
                    </Badge>
                </IconButton>
                <IconButton color="inherit">
                    <Favorite />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
