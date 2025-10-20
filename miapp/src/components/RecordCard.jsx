import { useState } from 'react'

import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

function RecordCard({animal, attribute, imageUrl, imageSize, description}) {
    const [count, setCount] = useState(0);


    return (
        <>
            <Stack
                direction = "column"
                spacing={6}
                sx={{ justifyContent: 'center', alignItems: 'center', marginTop: '15px', marginBottom: '15px' }}
            >
                <Typography variant='h4'>{`Soy un ${animal} ${attribute}`}</Typography>
                <Avatar alt={description} src={imageUrl} sx={{ width: imageSize, height: imageSize, border: '3px solid black' }} />
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