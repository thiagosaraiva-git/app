'use client';

import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Badge, Modal, Box, List, ListItem, ListItemText, Button } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';

import { useAtom } from 'jotai';
import { cartAtom } from '@/store/cart';

import './Header.scss'

const Header = () => {
    const [cart] = useAtom(cartAtom);
    const [open, setOpen] = useState(false);

    const handleCart = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleCheckout = () => {
        // Redirect the user to the checkout page
        window.location.href = '/checkout';
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    My Store
                </Typography>
                <IconButton color="inherit" onClick={handleCart} disabled={!cart.length}>
                    <Badge badgeContent={cart.length} color="secondary">
                        <ShoppingCart />
                    </Badge>
                </IconButton>
                <Modal open={open} onClose={handleClose}>
                    <Box className="cartModal">
                        <Typography variant="h6" component="h2" gutterBottom>
                            Cart Items
                        </Typography>
                        <List>
                            {cart.map((item, index) => (
                                <ListItem key={index}>
                                    <ListItemText primary={item.name} secondary={`Quantity: ${item.quantity}`} />
                                </ListItem>
                            ))}
                        </List>
                        <Button variant="contained" color="error" onClick={handleClose}>
                            Keep buying
                        </Button>
                        <Button variant="contained" color="primary" onClick={handleCheckout}>
                            Checkout
                        </Button>
                    </Box>
                </Modal>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
