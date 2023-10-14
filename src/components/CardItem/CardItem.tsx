"use client";

import { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  IconButton,
} from "@mui/material";
import "./CardItem.scss";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import { useAtom } from "jotai";
import { cartAtom } from "@/store/cart";

interface CardItemProps {
  name: string;
  image: string;
  price: number;
}

const CardItem: React.FC<CardItemProps> = ({ name, image, price }) => {
  const [quantity, setQuantity] = useState(0);
  const [cart, setCart] = useAtom(cartAtom);

  const handleAdd = () => {
    setQuantity(quantity + 1);
    const itemIndex = cart.findIndex((item) => item.name === name);

    if (itemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[itemIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      setCart([
        ...cart,
        {
          name: name,
          price: price,
          image: image,
          quantity: 1,
        },
      ]);
    }
  };

  const handleRemove = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      const itemIndex = cart.findIndex((item) => item.name === name);

      if (itemIndex !== -1) {
        if (cart[itemIndex].quantity > 1) {
          const updatedCart = [...cart];
          updatedCart[itemIndex].quantity -= 1;
          setCart(updatedCart);
        } else {
          const updatedCart = [...cart];
          updatedCart.splice(itemIndex, 1);
          setCart(updatedCart);
        }
      }
    }
  };

  return (
    <Grid item>
      <Card className="cardContainer">
        <CardMedia component="img" height="140" image={image} alt={name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}, ${price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Quantity: {quantity}
          </Typography>
          <Grid
            container
            spacing={1}
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            alignContent="center"
            wrap="wrap"
          >
            <IconButton
              aria-label="add"
              onClick={handleRemove}
              disabled={!quantity}
            >
              <RemoveIcon />
            </IconButton>
            <IconButton aria-label="add" onClick={handleAdd}>
              <AddIcon />
            </IconButton>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CardItem;
