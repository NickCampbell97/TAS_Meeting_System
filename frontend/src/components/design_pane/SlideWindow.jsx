import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { Stack } from '@mui/material';
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
                <div className='slide-container'>
                    <div style={{ position: 'relative' }}>
                        <Typography variant='h3' className='bordered-container' style={{ marginTop: '10px' }}>
                            <SlideOptionButton />
                            {slideData.header}
                        </Typography>
                    </div>
                    {bodyList.map((item, index) => (
                        <div style={{ position: 'relative' }}>
                            <Typography key={index} variant='body1' className='body-container' style={{ marginTop: '10px' }}>
                                <SlideOptionButton />
                                {item}
                            </Typography>
                        </div>
                    ))}
                    <Stack spacing={4} direction="row" style={{ alignItems: 'center', marginTop: '8px', minWidth: '250px' }}>
                    {fileList.map((item, index) => (
                        <div style={{ position: 'relative' }}>
                            <Typography key={index} variant='body1' className='file-container' style={{ marginTop: '10px' }}>
                                <SlideOptionButton />
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