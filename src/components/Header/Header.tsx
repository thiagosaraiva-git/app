"use client";

import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Modal,
  Box,
  List,
  ListItem,
  ListItemText,
  Button,
  Avatar,
  Grid,
} from "@mui/material";
import { ShoppingCart, Delete } from "@mui/icons-material";

import { useAtom } from "jotai";
import { cartAtom } from "@/store/cart";

import "./Header.scss";

const Header = () => {
  const [cart, setCart] = useAtom(cartAtom);
  const [open, setOpen] = useState(false);
  const [total, setTotal] = useState(0);

  const handleCart = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = (index: number) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  const handleCheckout = () => {
    // Redirect the user to the checkout page
    window.location.href = "/checkout";
  };

  useEffect(() => {
    let sum = 0;
    cart.forEach((item) => {
      sum += item.price * item.quantity;
    });
    setTotal(sum);
    if (!cart.length) {
      setOpen(false);
    }
  }, [cart]);

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Nike Store
        </Typography>
        <IconButton
          color="inherit"
          onClick={handleCart}
          disabled={!cart.length}
        >
          <Badge badgeContent={cart.length} color="secondary">
            <ShoppingCart />
          </Badge>
        </IconButton>
        <Modal open={open} onClose={handleClose}>
          <Box className="cartModal">
            <Typography variant="h6" component="h2" gutterBottom>
              Cart items
            </Typography>
            <List className="cartItemContainer">
              {cart.map((item, index) => (
                <div key={index}>
                  <ListItem className="cartItemList">
                    <Avatar>
                      <img src={item.image} alt={item.name} />
                    </Avatar>
                    <ListItemText
                      primary={item.name}
                      secondary={`Quantity: ${item.quantity} - Total: $${
                        (item.price * item.quantity).toFixed(2)
                      }`}
                    />
                    <IconButton
                      color="inherit"
                      onClick={() => handleDelete(index)}
                      className="cartItemDelete"
                    >
                      <Delete />
                    </IconButton>
                  </ListItem>
                </div>
              ))}
            </List>
            <Typography
              variant="body1"
              color="initial"
              className="cartTotalValue"
            >
              Total: ${total.toFixed(2)}
            </Typography>
            <Grid container className="cartButtonContainer">
              <Button variant="contained" color="error" onClick={handleClose}>
                Keep buying
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleCheckout}
              >
                Checkout
              </Button>
            </Grid>
          </Box>
        </Modal>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
