import CardItem from "@/components/CardItem/CardItem";
import { Typography } from "@mui/material";
import Grid from '@mui/material/Grid'

export default function Home() {
  return (
    <>
      <Grid container spacing={2}>
        <CardItem name={'test'} image={'test'} price={100} />
        <CardItem name={'test2'} image={'test2'} price={150} />
      </Grid>
    </>
    
  )
}
