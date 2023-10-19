'use client'
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
  brand: string;
  image: string;
  price: number;
}

const CardItem: React.FC<CardItemProps> = ({ name, brand, image, price }) => {
  const [cart, setCart] = useAtom(cartAtom);

  const handleAdd = () => {
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
          brand: brand,
          price: price,
          image: image,
          quantity: 1,
        },
      ]);
    }
  };

  const handleRemove = () => {
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
    };

  return (
    <Grid item>
      <Card className="cardContainer">
        <CardMedia component="img" height="140" image={image} alt={name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" noWrap>
            {brand} {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Price: ${price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Quantity in the cart: {cart.find((item) => item.name === name)?.quantity || 0}
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
              disabled={!cart.find((item) => item.name === name)?.quantity}
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