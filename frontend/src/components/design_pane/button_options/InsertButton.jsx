import React from 'react';
import { IconButton } from '@material-ui/core'
import AddIcon from '@mui/icons-material/Add';


const InsertButton = ({ onClick }) => {
    return (
        <IconButton style={{ height: '20px', width: '20px' }} onClick={onClick}>
            <AddIcon style={{ height: '20px', width: '20px', fill: 'gray' }} />
        </IconButton>
      );
};

export default InsertButton;