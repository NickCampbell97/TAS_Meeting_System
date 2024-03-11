import React, { useEffect, useState } from "react";
import { List, ListItemButton, ListItemText, ListItemIcon } from '@mui/material';
import ListSubheader from '@mui/material/ListSubheader';
import FolderIcon from '@mui/icons-material/Folder';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import NewSlideButton from "./NewSlideButton";
import SlideWindow from "../design_pane/SlideWindow";

const SlideList = ({ onClick }) => {

    const [slideDecks, setSlideDecks] = useState([]);
    const [slides, setSlides] = useState([]);
    const [selectedDeck, setSelectedDeck] = useState(null);

    useEffect (() => {
        async function fetchSlideDecks() {
            try {
                const response = await fetch('/api/slide-decks');
                if (!response.ok) {
                    throw new Error('Failed to fetch slide decks');
                }
                const data = await response.json();
                setSlideDecks(data.slideDecks);
            } catch (error) {
                console.error('Error fetching slide decks: ', error);
            }
        }

        fetchSlideDecks();
    }, []);

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

    /*
    const [slideHeader, setSlideHeader] = useState('');
    const [slideBody, setSlideBody] = useState(''); // change to get an array after testing
    const [slideDocuments, setSlideDocuments] = useState(''); // change to get an array as well
    */
    const [slideDataList, setSlideDataList] = useState([]); // checking to pass to slide window if all data is in an array

    const handleSlideClick = async (slide) => {
      console.log('Double clicked slide: ', slide);
      try {
        let baseSlidePath = '/api/slide-info/';
        let fullSlidePath = baseSlidePath.concat(slide);
        const response = await fetch(fullSlidePath);
        if (!response.ok) {
          throw new Error('Failed to get slide info');
        }
        const data = await response.json();
        /**
        setSlideHeader(data.slideHeader);
        setSlideBody(data.slideBody);
        setSlideDocuments(data.slideDocuments);
         */
        setSlideDataList([data.slideDataList]);
      } catch (error) {
        console.error('Error fetching slide info: ', error);
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
              style={{ maxHeight: '150px', overflow: 'auto' }}
            >
              {slides.map((slide, index) => (
                <ListItemButton key={index} dense divider onDoubleClick={() => handleSlideClick(slide)}>
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