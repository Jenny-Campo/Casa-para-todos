import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardMedia, Typography, createTheme, ThemeProvider, Grid } from '@mui/material'
import axios from 'axios'
import { useParams } from 'react-router'

const CARD = {  
    width: 1200,
    backgroundColor: '#C9E4EB',
    margin: '20px auto',
    display: 'flex',
    borderRadius: 10,
    marginTop: '20px',
    color:'dark',
    justifyContent:'space-between'
  }

  const theme = createTheme({ 
    palette: {
      light: '#C9E4EB',
      main: '#F1FAFC',
      dark: '#004A94',
      constrastText: '#F7F9A7'
    }
   })

function OwnerProfile() {

    const [user, setUser] = useState({})
    const {id} = useParams('id')

    const search = async() => {
        await axios.get(`http://localhost:2222/api/user/profile/${id}`)
        .then(response => {setUser(response.data)})
        .catch(error => {
            console.log(error)
        })
    }

    useEffect(() => {
        search()
    },[])
    
  return (
    <ThemeProvider theme={theme}>
    <Grid container>
    <Grid item xs={12} backgroundColor="light">
        <Card sx={ CARD }>
        <Grid xs={6}>   
            <CardMedia
        component="img"
        height="500"
        image="/Fotoperfil.jpg"
        alt="House/Apartment"
                />
        </Grid>
                <Grid xs={6}>
                <CardContent>
                <Typography variant="h6" component="div">
                    { user.name } { user.surname }
                </Typography>
                <Typography variant="h6" component="div">
                    { user.aboutYou }
                </Typography>
                <Typography variant="h6" component="div">
                    { user.lookingFor }
                </Typography>
                <Typography variant="h6" component="div">
                    { user.hobbies }
                </Typography>
                <Typography variant="h6" component="div">
                    { user.smoker }
                </Typography>
                <Typography variant="h6" component="div">
                    { user.pets }
                </Typography>
                <Typography variant="h6" component="div">
                    { user.emplyment }
                </Typography>
                <Typography variant="h6" component="div">
                    { user.rules }
                </Typography>
                <Typography variant="h6" component="div">
                    { user.roommate }
                </Typography>
                <Typography variant="h6" component="div">
                    { user.phoneNumber }
                </Typography>
                </CardContent>
                </Grid>
        </Card>
        </Grid>
        </Grid>
    </ThemeProvider>
  )
}

export default OwnerProfile