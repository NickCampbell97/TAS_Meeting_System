import {React, useState, useEffect} from 'react';
import Stack from '@mui/material/Stack';
import ButtonGroup from './ButtonGroup';
import Searchbar from './Searchbar';
import SlideList from './SlideList';

const SideBar = ({ onClick, onSlideOpen }) => {

    const [slideDecks, setSlideDecks] = useState([]);

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

    const handleRefresh = async (event) => {
        
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
    };

    return (
        <div style={{ display: 'inline-block', minHeight: '570px', minWidth: '350px', padding: 10, border: '1px solid gray' }}>
            <Stack>
              <ButtonGroup onComplete={handleRefresh} />
              <Searchbar />
              <SlideList onClick={onClick} onSlideOpen={onSlideOpen} slideDecks={slideDecks} />
            </Stack>
        </div>
    );
};

export default SideBar;
