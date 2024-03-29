import React, { useState } from 'react';
import SideBar from './sidebar/SideBar';
import DesignContainer from './design_pane/DesignContainer';
import { Stack } from "@mui/material";

const MainLayout = () => {
    const [color, setColor] = useState('white');

    const handleColorChange = () => {
        setColor(color === 'white' ? 'gray' : 'white');
    };

    const [isSlideSelected, setIsSlideSelected] = useState(false);

    const [slideData, setSlideData] = useState([]); 
    const [deckName, setDeckName] = useState([]);

    const handleSlideClick = async (deck, slide) => {
        setDeckName(deck);
        console.log('Double clicked slide: ', slide);
        try {
            let baseSlidePath = '/api/select-slide/';
            let tempPath = baseSlidePath.concat(deck);
            let temp2 = tempPath.concat('/');
            let fullSlidePath = temp2.concat(slide);
            console.log(fullSlidePath);
            const response = await fetch(fullSlidePath);
            if (!response.ok) {
            throw new Error('Failed to get slide info');
            }
            const data = await response.json();
            setSlideData(data);
            setIsSlideSelected(true);
            console.log('data received');
        } catch (error) {
            console.error('Error fetching slide info: ', error);
        }
    };

    
    if (!slideData) {
        return (
            <Stack spacing={4} direction="row" style={{alignItems: 'center', marginTop: '8px' }}>
              <SideBar onClick={handleColorChange} onSlideOpen={(deck, slide) => handleSlideClick(deck, slide)}/>
            </Stack>
        );
    }
    

    return (
        <Stack spacing={4} direction="row" style={{alignItems: 'center', marginTop: '8px' }}>
          <SideBar onClick={handleColorChange} onSlideOpen={(deck, slide) => handleSlideClick(deck, slide)}/>
          <DesignContainer color={color} slideData={slideData} deckName={deckName} slideSelectedCheck={isSlideSelected} />
        </Stack>
    );
};

export default MainLayout;