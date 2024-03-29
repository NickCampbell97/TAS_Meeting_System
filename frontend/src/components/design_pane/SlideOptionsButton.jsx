import React from 'react';
import { IconButton } from '@material-ui/core';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export default function SlideOptionButton() {
    return (
        <IconButton style={{ minHeight: '20px', minWidth: '20px', position: 'absolute', top: '1px', right: '3px', padding: '2px' }}>
            <MoreHorizIcon fontSize='medium' />
        </IconButton>
    );
};