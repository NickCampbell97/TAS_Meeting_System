import React, { useState } from 'react';
import SlideWindow from './SlideWindow';
import Stack from '@mui/material/Stack';
import SaveButton from './button_options/SaveButton';
import { Box } from '@mui/material';
import InsertSelection from './button_options/InsertSelection';
import InsertButton from './button_options/InsertButton';
import DuplicateButton from './button_options/DuplicateButton';
import DeleteButton from './button_options/DeleteButton';
import FileUploadButton from './FileUpload';
import BlankSlideWindow from './BlankSlideWindow';
import '@fontsource/roboto';

const DesignContainer = ({ color, slideData, deckName, slideSelectedCheck }) => {

    const handleSave = () => {

    };
    
    const [dialogVisible, setDialogVisible] = useState(false);

    const slideName = slideData.slide_name;

    const handleInsert = async (selectedValue, name, slideID) => {

        if (selectedValue === 'option2') {
            setDialogVisible(true);
        }

    };

    const hideFileDialog = () => {
        setDialogVisible(false);
    };

    const handleDuplicate = (deck, slide) => {

    };

    const handleDelete = (deck, slide) => {

    };

    const [selectedInsertValue, setSelectedInsertValue] = useState('option1');

    const handleChange = (event) => {
        setSelectedInsertValue(event.target.value);
    };


    const insertOptions = [
        { value: 'option1', label: 'Body' },
        { value: 'option2', label: 'Document' },
        { value: 'option3', label: 'Header' },
        { value: 'option4', label: 'Image' },
        { value: 'option5', label: 'Comment' }
    ];
    
    return (
        <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3, backgroundColor: 'lightgray', minHeight: '570px', minWidth: '850px' }}>
            <Stack spacing={4} direction='row' style={{ alignItems: 'center', backgroundColor: 'lightgray', minWidth: '840px' }}>
                <Stack spacing={1} direction="row" style={{alignItems: 'center', backgroundColor: 'white', minWidth: '500px', marginTop: '8px'}}>
                    <SaveButton onSave={handleSave} />
                    <InsertSelection
                        value={selectedInsertValue}
                        onChange={handleChange}
                        options={insertOptions}
                    />
                    <InsertButton onClick={() => handleInsert(selectedInsertValue, deckName, slideName)} />
                    <DuplicateButton onClick={() => handleDuplicate(deckName, slideData)} />
                    <DeleteButton onClick={() => handleDelete(deckName, slideData)} />
                    <p style={{ textAlign: 'right', marginLeft: '130px', fontSize: '14px', font: 'roboto' }}>{deckName}</p>
                </Stack>
                {dialogVisible && <div><FileUploadButton onComplete={hideFileDialog}/></div>}
            </Stack>
            {!slideSelectedCheck && <BlankSlideWindow />}
            {slideSelectedCheck && <SlideWindow color={color} slideData={slideData} />}
        </Box> 
    );

};

export default DesignContainer;