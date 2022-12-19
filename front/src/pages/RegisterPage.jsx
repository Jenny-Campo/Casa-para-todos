import {React, useEffect} from 'react';
import { Box, Button, Card, CardActions, CardContent, CardHeader, TextField, Icons, createTheme, Grid, ThemeProvider, FormControl, InputLabel, Select, MenuItem  } from  '@mui/material/';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signupService } from '../services/authService'
import provinceService from '../services/provinceService';

const theme = createTheme({ //paleta de colores (light=azul claro / main=blanco / dark=azul osc. /contrastText= amarillo)
    palette: {
      light: '#C9E4EB',
      main: '#F1FAFC',
      dark: '#004A94',
      constrastText: '#F7F9A7'
    }
})

const BACKGROUND = {
    height: 2000,
    backgroundColor: '#C9E4EB',
    margin: '0 auto',
}

const CARD = {         
    width: '900px',
    margin: '20px auto', // 2 valores aplica ariba-abajo, y der.-izq.
    display: 'flex',
    justify: 'center',
    align:'center',
    backgroundColor: '#F1FAFC'
}

const BUTTON1 = {                 // OJOOO, no consigo que quede alineado con el final del último cajón
    backgroundColor: '#004A94',
    color: '#F7F9A7',
    borderRadius: 50
}

function RegisterPage() {

    const [name, setName] = useState()
    const [surname, setSurname] = useState()
    const [age, setAge] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [password2, setPassword2] = useState()
    const [address, setAddress] = useState()
    const [location, setLocation] = useState()
    const [province, setProvince] = useState()          
    const [phoneNumber, setPhoneNumber] = useState()
    const [aboutYou, setAboutYou] = useState()
    const [lookingFor, setLookingFor] = useState()
    const [hobbies, setHobbies] = useState()
    const [smoker, setSmoker] = useState()
    const [pets, setPets] = useState()
    const [employment, setEmployment] = useState()
    //const [photo, setPhoto] = useState()            --- ALVARO dice que lo dejemos sin hacer por ahora
    const [rules, setRules] = useState()
    const [roommate, setRoommate] = useState()
    

    const navigate = useNavigate()

    const register = async () => {
        const user = {
            name,
            surname,
            email,
            password,
            age,
            address,
            location,
            province,
            phoneNumber,
            aboutYou,
            lookingFor,
            hobbies,
            smoker,
            pets,
            employment, 
            rules,
            roommate
        }
        if (password === password2){
            const response = await signupService(user)
            
            if(response.error) {
                alert('usuario o contraseña erróneo')  //OJO, HAY QUE HACER UN COMPONENTE PARA ESTO
            } else {
                localStorage.setItem('email', response.email)
                localStorage.setItem('token', response.token)  // con esto tendríamos el token guardado
                navigate('/userMenu')
            }


        } else {
            alert('usuario o contraseña erróneo')
        }

    }

    function handleChange(e){
        setProvince(e.target.value)
    }

    console.log('Provincia elegida: ', province)

    const [provinces, setProvinces] = useState([]) //el conjunto de todas las provincias

    useEffect(() => {
        async function getAllProvinces() {
            setProvinces(await provinceService())
        }
        getAllProvinces()
        console.log('provinces', provinces)
    }, [])

    console.log('resultado', provinces)

    return (

        <ThemeProvider theme={theme}>
            <Box style={BACKGROUND}>
            <Grid container>
            <Grid item xs={12} md={12}> {/* preguntar como podemos hacer para que cambien los tamaños de las cosas cuando se hace más pequeña la pantalla */}
                <Card sx={CARD}>
                    <CardContent>
                        <CardHeader title="Crea tu perfil" sx={{backgroundColor: 'dark', color: 'constrastText', borderRadius: 1, marginBottom: '20px' }} />

                        <TextField
                            label="Nombre"
                            type="string"
                            variant="outlined"
                            fullWidth
                            sx={{marginBottom: '20px'}}
                            value={name} onChange={(e) => setName(e.target.value)}
                        />
                        <TextField
                            label="Apellido"
                            type="string"
                            variant="outlined"
                            fullWidth
                            sx={{marginBottom: '20px'}}
                            value={surname} onChange={(e) => setSurname(e.target.value)}
                        />
                        <TextField
                            label="Email"
                            type="string"
                            variant="outlined"
                            fullWidth
                            sx={{marginBottom: '20px'}}
                            value={email} onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            label="Contraseña"
                            type="password"
                            variant="outlined"
                            fullWidth
                            sx={{marginBottom: '20px'}}
                            value={password} onChange={(e) => setPassword(e.target.value)}
                        />
                        <TextField
                            label="Repetir contraseña"
                            type="password"
                            variant="outlined"
                            fullWidth
                            sx={{marginBottom: '20px'}}
                            value={password2} onChange={(e) => setPassword2(e.target.value)}
                        />
                        <TextField
                            label="Edad"
                            type="number"
                            variant="outlined"
                            fullWidth
                            sx={{marginBottom: '20px'}}
                            value={age} onChange={(e) => setAge(e.target.value)}
                        />
                        <TextField
                            label="Dirección"
                            type="string"
                            variant="outlined"
                            fullWidth
                            sx={{marginBottom: '20px'}}
                            value={address} onChange={(e) => setAddress(e.target.value)}
                        />
                        <TextField
                            label="Localidad"
                            type="string"
                            variant="outlined"
                            fullWidth
                            sx={{marginBottom: '20px'}}
                            value={location} onChange={(e) => setLocation(e.target.value)}
                        />
                        {/* <TextField
                            label="Provincia"
                            type="string"
                            variant="outlined"
                            fullWidth
                            sx={{marginBottom: '20px'}}
                            value={province} onChange={(e) => setProvince(e.target.value)}
                        /> */}

                            <FormControl fullWidth sx={{marginBottom: '20px'}}>
                                <InputLabel id="demo-simple-select-label">Provincia</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={province}
                                    label="Age"
                                    onChange={handleChange}
                                    >{/*value={provincia} */}
                                {/* <MenuItem value={'Las palmas'}>Las Palmas</MenuItem>
                                <MenuItem value={43}>Santa Cruz de Tenerife</MenuItem>
                                <MenuItem value={29}>Madrid</MenuItem> */}
                                    {provinces.map((province) => {
                                        <MenuItem
                                            key={province.id}
                                            value={province.name}
                                        >
                                            {province.name}
                                        </MenuItem>
                                    })}
                                </Select>
                            </FormControl>

                        <TextField
                            label="Teléfono"
                            type="integer"
                            variant="outlined"
                            fullWidth
                            sx={{marginBottom: '20px'}}
                            value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                        <TextField
                            label="Cuéntanos sobre tí, para que l@s posibles compañer@s puedan conocerte un poco más"
                            type="string"
                            variant="outlined"
                            fullWidth
                            sx={{marginBottom: '20px'}}
                            value={aboutYou} onChange={(e) => setAboutYou(e.target.value)}
                        />
                        <TextField
                            label="¿Qué estás buscando en la app?"
                            type="string"
                            variant="outlined"
                            fullWidth
                            sx={{marginBottom: '20px'}}
                            value={lookingFor} onChange={(e) => setLookingFor(e.target.value)}
                        />
                        <TextField
                            label="¿Qué te gusta hacer en tu tiempo libre?"
                            type="string"
                            variant="outlined"
                            fullWidth
                            sx={{marginBottom: '20px'}}
                            value={hobbies} onChange={(e) => setHobbies(e.target.value)}
                        />
                        <TextField
                            label="¿Eres fumador/a?"
                            type="string"
                            variant="outlined"
                            fullWidth
                            sx={{marginBottom: '20px'}}
                            value={smoker} onChange={(e) => setSmoker(e.target.value)}
                        />
                        <TextField
                            label="¿Tienes alguna mascota?"
                            type="string"
                            variant="outlined"
                            fullWidth
                            sx={{marginBottom: '20px'}}
                            value={pets} onChange={(e) => setPets(e.target.value)}
                        />
                        <TextField
                            label="¿Trabajas?, ¿Estás jubilado/a? ... ¡Cuéntanos más!"
                            type="string"
                            variant="outlined"
                            fullWidth
                            sx={{marginBottom: '20px'}}
                            value={employment} onChange={(e) => setEmployment(e.target.value)}
                        />
                        <TextField
                            label="Indica las normas que te gustaría tener en casa"
                            type="string"
                            variant="outlined"
                            fullWidth
                            sx={{marginBottom: '20px'}}
                            value={rules} onChange={(e) => setRules(e.target.value)}
                        />
                        <TextField
                            label="¿Con cuál de estas opciones te gustaría compartir? (Puedes seleccionar varias opciones)"
                            type="string"
                            variant="outlined"
                            fullWidth
                            sx={{marginBottom: '20px'}}
                            value={roommate} onChange={(e) => setRoommate(e.target.value)}
                        />

                        <CardActions  color='succes'  sx={{display: 'flex', justify: 'end'}}>
                            <Button variant="contained" sx={BUTTON1} onClick={() => register()}>  {/*component={Link} to="/userMenu"*/}
                                Continuar
                            </Button>
                        </CardActions>
                    </CardContent>
                </Card>
            </Grid>
            </Grid>
            </Box>
        </ThemeProvider>
    )
}

export default RegisterPage
