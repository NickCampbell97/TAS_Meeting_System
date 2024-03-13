import React from 'react';
import Stack from '@mui/material/Stack';
import ButtonGroup from './ButtonGroup';
import Searchbar from './Searchbar';
import SlideList from './SlideList';
import TestButton from './TestButton';

const SideBar = ({ onClick }) => {
    return (
        <div style={{ display: 'inline-block', height: '570px', width: '350px', padding: 10, border: '1px solid gray' }}>
            <Stack>
              <ButtonGroup />
              <Searchbar />
              <SlideList onClick={onClick}/>
              <TestButton />
            </Stack>
        </div>
    );
};

export default SideBar;
