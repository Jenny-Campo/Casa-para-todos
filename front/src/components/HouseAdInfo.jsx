import React from 'react'
import { Card, ThemeProvider, createTheme, ImageList, ImageListItem, CardContent, Typography, Button, Grid, CardActions, CardMedia } from '@mui/material'

const theme = createTheme({ //paleta de colores (light=azul claro / main=blanco / dark=azul osc. /contrastText= amarillo)
  palette: {
    light: '#C9E4EB',
    main: '#F1FAFC',
    dark: '#004A94',
    constrastText: '#F7F9A7'
  }
 })

 const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
    title: 'Bed',
  },
  {
    img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
    title: 'Kitchen',
  },
  {
    img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
    title: 'Sink',
  },
  {
    img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
    title: 'Books',
  },
  {
    img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
    title: 'Chairs',
  },
  {
    img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
    title: 'Candle',
  },
  {
    img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
    title: 'Laptop',
  },
  {
    img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
    title: 'Doors',
  },
  {
    img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
    title: 'Storage',
  },
  {
    img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
    title: 'Coffee table',
  },
  {
    img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
    title: 'Blinds',
  },
];


function HouseAdInfo({location, direcction, description, rentalPrice}) {
  return (
    <ThemeProvider theme={theme}>
      <Grid container>
        <Grid item xs={12} md={12}>
      <Card align="center" sx={{ backgroundColor:'light', color:'dark' }}>
          <CardContent>
            <Typography variant="h3" component="div">
              {location}, Gran Vía
            </Typography>
            <Typography variant="h4" component="div">
              Piso, Casi nuevo
            </Typography>
            <Typography variant="h4" component="div">
              Baños:2
            </Typography>
            <Typography variant="h4" component="div">
              Habitaciones:4
            </Typography>
            <Typography variant="h5" component="div">
              400€/mes
            </Typography>
            <Typography variant="h5" component="div">
              Descripción
            </Typography>
            <Button>
              Enviar mensajes
            </Button>
            <Button>
              Ver perfil del caser@
            </Button>
            <CardMedia>
          <ImageList sx={{ width: 500, height: 450, m:1 }} variant="woven" cols={3} gap={1}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=161&fit=crop&auto=format`}
            srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
    </CardMedia>
          </CardContent>
      </Card>
      </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default HouseAdInfo