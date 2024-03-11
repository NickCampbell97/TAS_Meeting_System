import React, { useState } from 'react';
import SideBar from './sidebar/SideBar';
import DesignContainer from './design_pane/DesignContainer';
import { Stack } from "@mui/material";

const MainLayout = () => {
    const [color, setColor] = useState('white');

    const handleColorChange = () => {
        setColor(color === 'white' ? 'gray' : 'white');
    };


    return (
        <Stack spacing={4} direction="row" style={{alignItems: 'center', marginTop: '8px' }}>
          <SideBar onClick={handleColorChange} />
          <DesignContainer color={color} />
        </Stack>
    );
};

export default MainLayout;