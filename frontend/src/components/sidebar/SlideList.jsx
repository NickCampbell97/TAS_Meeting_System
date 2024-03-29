import React, { useState } from "react";
import { List, ListItemButton, ListItemText, ListItemIcon } from '@mui/material';
import ListSubheader from '@mui/material/ListSubheader';
import FolderIcon from '@mui/icons-material/Folder';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import NewSlideButton from "./NewSlideButton";

const SlideList = ({ onClick, onSlideOpen, slideDecks }) => {

    const [slides, setSlides] = useState([]);
    const [selectedDeck, setSelectedDeck] = useState(null);

    const handleDoubleClick = async (deckName) => {
        console.log('Double clicked on deck:', deckName);
        try {
            let base = '/api/slides/';
            let fullPath = base.concat(deckName);
            const response = await fetch(fullPath);
            if (!response.ok) {
                throw new Error('Failed to fetch slides');
            }
            const data = await response.json();
            setSelectedDeck(deckName);
            setSlides(data.slides);
        } catch (error) {
            console.error('Error fetching slides: ', error);
        }
    };
    
    // Add new slide popup button to stack
    return (
        <div>
          <List
            subheader={
              <ListSubheader component="div" id="nested-list-subheader" style={{ paddingBottom: 0, paddingTop: '10px', paddingLeft: '20px', color: '#000000' }}>
                Slide Decks
              </ListSubheader>
            }
            style={{ maxHeight: '190px', overflow: 'auto', paddingBottom: '0px', marginTop: '10px' }}
          >
            {slideDecks.map((deck, index) => (
                <ListItemButton key={index} dense divider onDoubleClick={() => handleDoubleClick(deck)}>
                    <ListItemIcon style={{padding: '0px', margin: 0}}>
                        <FolderIcon style={{ height: '18px', marginRight: 0 }}/>
                    </ListItemIcon>
                    <ListItemText primary={deck} style={{ padding: '0px', alignItems: 'flex-start', margin: 0}}/>
                </ListItemButton>
            ))}
          </List>
          <Divider style={{ marginTop: '12px', marginBottom: '10px', borderColor: '#000000' }}/>
          {selectedDeck && (
            <List
              subheader={
                <Stack spacing={12} direction="row" style={{alignItems: 'center'}}>
                  <ListSubheader component="div" id="nested-list-subheader" style={{ paddingBottom: 0, paddingLeft: '20px', color: '#000000' }}>
                    {selectedDeck} Slides
                  </ListSubheader>
                  <NewSlideButton onClick={onClick}/>
                </Stack>
              }
              style={{ maxHeight: '190px', overflow: 'auto' }}
            >
              {slides.map((slide, index) => (
                <ListItemButton key={index} dense divider onDoubleClick={() => onSlideOpen(selectedDeck, slide)}>
                  <ListItemText primary={slide} style={{ paddingLeft: '5px', alignItems: 'flex-start', margin: '0px' }} />
                </ListItemButton>
              ))}
            </List>
          )}
          
        </div>   
    );
};

/**
 * {slideDataList && <SlideWindow data={slideDataList} />} - Line 118
 */

export default SlideList;