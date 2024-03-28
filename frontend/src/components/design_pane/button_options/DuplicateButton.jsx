import React from 'react';
import { IconButton } from '@material-ui/core'
import DifferenceOutlinedIcon from '@mui/icons-material/DifferenceOutlined';


const DuplicateButton = ({ onClick }) => {
    return (
        <IconButton style={{ height: '20px', width: '20px' }} onClick={onClick}>
            <DifferenceOutlinedIcon style={{ height: '20px', width: '20px', fill: 'gray' }} />
        </IconButton>
      );
};

export default DuplicateButton;