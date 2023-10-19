'use client'

import CardItem from "@/components/CardItem/CardItem";
import Grid from '@mui/material/Grid'
import axios from "axios";
import { useEffect, useState } from "react";

type Shoe = {
  _id: string
  name: string
  brand: string
  image: string
  price: number
}

export default function Home() {
  const [shoes, setShoes] = useState([])
  
  async function getShoes() {
    try {
      // let res = await axios.get('http://localhost:2540/shoes') // local
      let res = await axios.get('https://backend-shoes-store.onrender.com/shoes') // production
      setShoes(res.data)
    } catch (error) {
      console.error('Error: ' + error)
    }
  }

  useEffect(() => {
    getShoes()
  }, [])

  return (
    <>
      <Grid container spacing={2} alignItems='center' justifyContent='center'>
        { shoes.length ? shoes.map((shoe: Shoe) => 
          <CardItem key={shoe._id} name={shoe.name} brand={shoe.brand} image={shoe.image} price={shoe.price} />
        ) : <Grid item>Loading shoes...</Grid> }
      </Grid>
    </>
  )
}
