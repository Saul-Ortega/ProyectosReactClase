import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

function AppGrid() {


    return (
     <>
        <Grid container spacing={2}>
            <Grid size={{xs: 8, md: 10, lg: 15, xl: 20}}>
                <Button variant='contained' fullWidth>1</Button>
            </Grid>
            <Grid size={{xs: 8, md: 10, lg: 15, xl: 20}}>
                <Button variant='contained' fullWidth>2</Button>
            </Grid>
            <Grid size={{xs: 8, md: 10, lg: 15, xl: 20}}>
                <Button variant='contained' fullWidth>3</Button>
            </Grid>
        </Grid>
     </>
    )
}

export default AppGrid