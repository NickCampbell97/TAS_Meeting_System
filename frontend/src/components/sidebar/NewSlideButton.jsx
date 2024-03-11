import React from 'react';
import { IconButton } from '@material-ui/core'
import AddIcon from '@mui/icons-material/Add';

const NewSlideButton = ({ onClick }) => {
    return (
      <IconButton style={{ height: '10px', width: '10px' }} onClick={onClick}>
          <AddIcon />
      </IconButton>
    );
};

export default NewSlideButton;