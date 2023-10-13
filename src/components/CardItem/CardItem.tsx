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

import { useSetAtom } from "jotai";
import { itemAtom } from "@/store/item";
import { cartAtom } from "@/store/cart";

interface CardItemProps {
  name: string;
  image: string;
  price: number;
}

const CardItem: React.FC<CardItemProps> = ({ name, image, price }) => {
  const [quantity, setQuantity] = useState(0);
  const setItem = useSetAtom(itemAtom);
  const setCartQuantity = useSetAtom(cartAtom);

  const handleAdd = () => {
    setQuantity(quantity + 1);
    setItem({
      id: Math.random(),
      price: 10,
      name: name,
      image: image,
      quantity: quantity,
    });
    setCartQuantity((prevCartQuantity) => prevCartQuantity + 1);
  };

  const handleRemove = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      setItem({
        id: Math.random(),
        price: 10,
        name: name,
        image: image,
        quantity: quantity,
      });
      setCartQuantity((prevCartQuantity) => prevCartQuantity - 1);
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
