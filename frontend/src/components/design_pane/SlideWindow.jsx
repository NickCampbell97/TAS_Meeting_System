import React from 'react';
import Box from '@material-ui/core/Box';

const SlideWindow = ({ color }) => {
    return (
        <Box
            style={{
                backgroundColor: color,
                width: '200px',
                height: '200px',
                marginTop: '190px',
                marginLeft: '300px',
                alignSelf: 'center'
            }}
        >
            <p> Slide Info:</p>
            
        </Box>
    );
};

/**
 * <ul>
                {data.map((string, index) => (
                <li key={index}>{string}</li>
                ))}
            </ul>
 */

export default SlideWindow;