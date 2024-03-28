import React from 'react';
import { IconButton } from '@material-ui/core';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';

const SaveButton = ({ onSave }) => {
    const handleClick = () => {
        if (typeof onSave === 'function') {
            onSave();
        }
    };

    return (
        <IconButton style={{ height: '18px', width: '18px', marginLeft: '4px' }} onClick={handleClick}>
            <SaveOutlinedIcon style={{ fill: 'gray' }}/>
        </IconButton>
    );
}

export default SaveButton;