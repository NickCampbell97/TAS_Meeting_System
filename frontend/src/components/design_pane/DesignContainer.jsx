import React from 'react';
import Container from '@mui/material/Container';
import SlideWindow from './SlideWindow';

const DesignContainer = ({ color }) => {
    
    return (
        <Container style={{ backgroundColor: 'lightgray', height: '570px', width: '850px', overflow: 'auto' }}>
            <SlideWindow color={color} />
        </Container>
    );

};

export default DesignContainer;