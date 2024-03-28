import React from 'react';
import Stack from '@mui/material/Stack';
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';
import { IconButton } from '@material-ui/core';
import DownloadIcon from '@mui/icons-material/Download';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import NewDeckPopup from './NewDeckPopup';

const ButtonGroup = ({ onComplete }) => {
    
    return (
        <div style={{ display: 'inline-block' }}>
          <Stack spacing={1} direction="row" style={{alignItems: 'center'}}>
            <NewDeckPopup onComplete={onComplete}/>
            <IconButton>
              <CreateNewFolderIcon />
            </IconButton>
            <IconButton style={{ padding: 0 }}>
              <DownloadIcon />
            </IconButton>
            <IconButton style={{ padding: 7 }}>
              <FileUploadIcon />
            </IconButton>
          </Stack>
        </div>
      );
};

export default ButtonGroup;