import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

export default function BlankSlideWindow() {
    return (
        <Box
            style={{
                backgroundColor: 'white',
                minWidth: '848px',
                minHeight: '480px',
                marginTop: '10px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center'
            }}
        >
            <Typography variant='h4'>Select Slide From List To Edit</Typography>
            
        </Box>
    )
}