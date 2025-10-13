import React, { useState } from "react";
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function RecordForm() {
    const [data, setData] = useState({name: '', breed: ''});

    const handleSubmit = (e) => {
        //PARA QUE NO MANDE EL FORMULARIO, SINO QUE HAGA LO QUE YO LE DIGA
        e.preventDefault();
    }

    const handleNameChange = (e) => {
        setData({
            ...data,
            name: e.target.value
        })
    }

    const handleBreedChange = (e) => {
        setData({
            ...data,
            breed: e.target.value
        })
    }

    return(
        <>
            <Container>
                <Paper elevation={1} square={false} sx={{ textAlign: 'center' }} >
                    <Typography variant="h6" color="black" sx={{mt: 2, mb: 2}}>Registra tu mascota</Typography>
                    <Box
                        component='form'
                        onSubmit={handleSubmit}    
                    >
                        <Grid container spacing={0}>
                            <Grid size={{xs: 6}}>
                                <TextField 
                                    required
                                    label='Nombre de mascota'
                                    variant="outlined"
                                    fullWidth
                                    value={data.name}
                                    onChange={handleNameChange}
                                />
                            </Grid>
                            <Grid size={{xs: 6}}>
                                <TextField 
                                    required
                                    label='Raza'
                                    variant="outlined"
                                    fullWidth
                                    value={data.breed}
                                    onChange={handleBreedChange}
                                />
                            </Grid>
                            <Grid size={12}>
                                <Button component='button' variant="outlined" fullWidth>Registrador</Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Paper>
            </Container>
        </>
    );
}

export default RecordForm