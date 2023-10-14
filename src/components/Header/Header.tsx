'use client';

import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Badge } from '@mui/material';
import { ShoppingCart, Favorite } from '@mui/icons-material';

import { useAtom } from 'jotai';
import { cartAtom } from '@/store/cart';

const Header = () => {
    const [cart] = useAtom(cartAtom);
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    My Store
                </Typography>
                <IconButton color="inherit">
                    <Badge badgeContent={cart.length} color="secondary">
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
