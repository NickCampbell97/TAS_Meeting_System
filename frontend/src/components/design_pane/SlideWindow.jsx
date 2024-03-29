import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { Stack } from '@mui/material';
import './design_styles/styles.css';

const SlideWindow = ({ color, slideData }) => {

    if (!slideData) {
        return null;
    }

    return (
        <Box
            style={{
                backgroundColor: color,
                minWidth: '848px',
                minHeight: '480px',
                marginTop: '10px',
                display: 'flex',
                justifyContent: 'center',
                textAlign: 'center'
            }}
        >
            {slideData && (
                <div className='slide-container'>
                    <Typography variant='h3' className='bordered-container' style={{ marginTop: '10px' }}>{slideData.header}</Typography>
                    <Typography variant='body1' className='bordered-container' style={{ marginTop: '10px' }}>{slideData.body}</Typography>
                    <Stack spacing={4} direction="row" style={{alignItems: 'center', marginTop: '8px' }}>
                        
                    </Stack>
                </div>
            )}
            
        </Box>
    );
};

export default SlideWindow;