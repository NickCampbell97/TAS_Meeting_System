import React from 'react';
import Box from '@material-ui/core/Box';
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
                    <p className='bordered-paragraph'>{slideData.slide_name}</p>
                    <h2>{slideData.header}</h2>
                    <p>{slideData.body}</p>
                </div>
            )}
            
        </Box>
    );
};

export default SlideWindow;