"use client";

import CardItem from "@/components/CardItem/CardItem";
import Grid from "@mui/material/Grid";
import axios from "axios";
import { useEffect, useState } from "react";
import { Shoe } from "@/types/shoe";
import { CircularProgress } from "@mui/material";
import "./page.scss";

const URI: any = 
  process.env.BACKEND_PROD || "http://localhost:2540/shoes"

export default function Home() {
  const [shoes, setShoes] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getShoes() {
    try {
      let res = await axios.get(URI);
      setShoes(res.data);
      setLoading(false);
    } catch (error) {
      console.error("Error: " + error);
    }
  }

  useEffect(() => {
    getShoes();
  }, []);

  return (
    <Grid container spacing={2} alignItems="center" justifyContent="center">
      {loading ? (
        <CircularProgress className="pageLoading" />
      ) : (
        <>
          {shoes.length ? (
            shoes.map((shoe: Shoe) => (
              <CardItem
                key={shoe._id}
                _id={shoe._id}
                name={shoe.name}
                brand={shoe.brand}
                image={shoe.image}
                price={shoe.price}
                stock={shoe.stock}
                quantity={0}
              />
            ))
          ) : (
            <Grid item>No shoes found.</Grid>
          )}
        </>
      )}
    </Grid>
  );
}
