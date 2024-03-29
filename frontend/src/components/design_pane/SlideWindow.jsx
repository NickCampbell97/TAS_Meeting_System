import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { Stack } from '@mui/material';
import { IconButton } from '@material-ui/core';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SlideOptionButton from './SlideOptionsButton';
import './design_styles/styles.css';

const SlideWindow = ({ color, slideData }) => {

    const bodyList = slideData.body;
    const initialFileList = slideData.files;

    function getFileNameFromPath(filePath) {
        const parts = filePath.split(/[\/\\]/);
        return parts[parts.length - 1];
    }

    function getFiles(files) {
        return files.map(getFileNameFromPath);
    }

    const fileList = getFiles(initialFileList);

    const handleHeaderItemClick = (action) => {
        console.log(`Clicked: ${action}`);
    };

    const handleBodyItemClick = (action) => {
        console.log(`Clicked: ${action}`);
    };


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
                <div className='slide-container' style={{ alignItems: 'center' }}>
                    <div style={{ position: 'relative' }}>
                        <Typography variant='h4' className='bordered-container' style={{ marginTop: '5px' }}>
                            <SlideOptionButton onItemClick={handleHeaderItemClick}/>
                            {slideData.header}
                        </Typography>
                    </div>
                    {bodyList.map((item, index) => (
                        <div style={{ position: 'relative' }}>
                            <Typography key={index} variant='body1' className='body-container' style={{ marginTop: '10px' }}>
                                <SlideOptionButton onItemClick={handleBodyItemClick}/>
                                {item}
                            </Typography>
                        </div>
                    ))}
                    <Stack spacing={4} direction="row" style={{ alignContent: 'center', marginTop: '8px', minWidth: '250px' }}>
                    {fileList.map((item, index) => (
                        <div style={{ position: 'relative' }}>
                            <Typography key={index} variant='body1' className='file-container' style={{ marginTop: '10px' }}>
                                <IconButton style={{ minHeight: '20px', minWidth: '20px', position: 'absolute', top: '4px', right: '4px', padding: '4px' }}>
                                    <MoreHorizIcon fontSize='medium' />
                                </IconButton>
                                {item}
                            </Typography>
                        </div>
                        
                    ))}
                    </Stack>
                </div>
            )}
            
        </Box>
    );
};

export default SlideWindow;