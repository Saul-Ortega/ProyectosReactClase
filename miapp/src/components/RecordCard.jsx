import { useState } from 'react'
import catPhoto from '../assets/gato.jpeg'

import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

function RecordCard() {
    const [count, setCount] = useState(0);
    const catBreed = 'GATO EGIPCIO';

    return (
        <>
            <Stack
                direction = "column"
                spacing={6}
                sx={{ justifyContent: 'center', alignItems: 'center' }}
            >
                <Typography variant='h4'>{catBreed}</Typography>
                <Avatar src={catPhoto} alt="" sx={{ width: '300px', height: '300px', border: '3px solid black' }} />
                <Button 
                variant = 'contained' 
                size = 'large' 
                color = 'primary'
                sx = {{color: 'black', backgroundColor: '#E8ABFF', fontWeight: 'bold', border: '2px solid black', '&:hover': {backgroundColor: '#D35CFF'} }}
                disabled = {false}
                onClick={() => setCount(count + 1)}>Me has hecho { count } rascaditas</Button>
            </Stack>
        </>
    );
}

export default RecordCard