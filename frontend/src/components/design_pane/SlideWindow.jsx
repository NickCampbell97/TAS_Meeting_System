import React from 'react';
import Box from '@material-ui/core/Box';

const SlideWindow = ({ color, slideData }) => {
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
                <div className='container' style={{ marginTop: '5px', minWidth: '840px' }}>
                    <p>{slideData.slide_name}</p>
                    <h2>{slideData.header}</h2>
                    <p>{slideData.body}</p>
                </div>
            )}
            
        </Box>
    );
};

export default SlideWindow;