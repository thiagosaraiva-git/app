import CardItem from "@/components/CardItem/CardItem";
import Grid from '@mui/material/Grid'

export default function Home() {
  return (
    <>
      <Grid container spacing={2} alignItems='center' justifyContent='center'>
        <CardItem name={'test'} image={'test'} price={100} />
        <CardItem name={'test2'} image={'test2'} price={150} />
        <CardItem name={'test3'} image={'test3'} price={99} />
        <CardItem name={'test4'} image={'test4'} price={299} />
      </Grid>
    </>
    
  )
}
