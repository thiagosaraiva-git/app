'use client';

import { useState } from 'react';
import { Card, CardMedia, CardContent, Typography, Grid, IconButton } from '@mui/material';
import './CardItem.scss';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import { useSetAtom } from 'jotai';
import { itemAtom } from '../../store/item';

interface CardItemProps {
    name: string;
    image: string;
    price: number;
}

const CardItem: React.FC<CardItemProps> = ({ name, image, price }) => {
    const [quantity, setQuantity] = useState(0);
    const setItem= useSetAtom(itemAtom);

    const handleAdd = () => {
        setQuantity(quantity + 1);
        setItem({
            id: Math.random(),
            price: 10,
            name: name,
            image: image,
            quantity: quantity + 1
        })
    };

    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card className='cardContainer'>
                <CardMedia
                    component="img"
                    height="140"
                    image={image}
                    alt={name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}, ${price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Quantity: {quantity}
                    </Typography>
                    <IconButton aria-label="add" onClick={handleAdd}>
                        <AddIcon />
                    </IconButton>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default CardItem;
