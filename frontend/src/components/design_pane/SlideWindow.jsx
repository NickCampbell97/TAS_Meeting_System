import React from 'react';
import Box from '@material-ui/core/Box';

const SlideWindow = ({ color, slideData }) => {
    return (
        <Box
            style={{
                backgroundColor: color,
                width: '848px',
                height: '480px',
                marginTop: '10px',
                display: 'flex',
                justifyContent: 'center',
                textAlign: 'center'
            }}
        >
            {slideData && (
                <div style={{ marginTop: '5px' }}>
                    <p>{slideData.slide_name}</p>
                    <h2>{slideData.header}</h2>
                    <p>{slideData.body}</p>
                </div>
            )}
            
        </Box>
    );
};

export default SlideWindow;