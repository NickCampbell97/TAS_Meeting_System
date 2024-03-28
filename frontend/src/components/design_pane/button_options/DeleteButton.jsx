import React from 'react';
import { IconButton } from '@material-ui/core'
import DeleteIcon from '@mui/icons-material/Delete';


const DeleteButton = ({ onClick }) => {
    return (
        <IconButton style={{ height: '20px', width: '20px' }} onClick={onClick}>
            <DeleteIcon style={{ height: '20px', width: '20px', fill: 'gray' }} />
        </IconButton>
      );
};

export default DeleteButton;