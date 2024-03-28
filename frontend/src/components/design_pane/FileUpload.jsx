import React, { useState } from 'react';
import Input from '@mui/material/Input';
import { Stack, Button } from '@mui/material';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';


const FileUploadButton = ({ onComplete }) => {
    const [file, setSelectedFile] = useState(null);
    const [message, setMessage] = useState('');
  
    const handleFileChange = (e) => {
        if (e.target.files) {
            setMessage('');
            setSelectedFile(e.target.files[0]);
          }
    };

    const handleUpload = async (event) => {

        if (!file) {
            setMessage('Please select a file.');
            return;
        }
        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch('/api/upload-doc', {
              method: 'POST',
              body: formData,
            });
      
            if (response.ok) {
              const data = await response.json();
              setMessage('Success!');
              setSelectedFile(null);
              onComplete();
            } else {
              // Handle errors
              setMessage('Failed');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <Stack spacing={1} direction='row' style={{ alignItems: 'center', backgroundColor: 'lightgray' }}>
            <Input type="file" fontSize='small' size='small' style={{ marginTop: '5px' }} onChange={handleFileChange} />
            <Button variant='outlined' size='small' fontsize='small' startIcon={<FileUploadOutlinedIcon />} style={{ width: '100px', marginTop: '5px', color: 'black', borderColor: 'black' }} onClick={handleUpload}>Upload</Button>
        </Stack>  
    );
};

export default FileUploadButton;