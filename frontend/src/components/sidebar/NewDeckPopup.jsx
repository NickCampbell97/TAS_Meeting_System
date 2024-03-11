import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const NewDeckPopup = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  }; 

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/slide-decks/new-deck', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name }),
      });
      if (response.ok) {
        console.log('Form data sent successfully');
        setName('');
        setOpen(false);
      } else {
        console.error('Failed to send form data');
      }
    } catch (error) {
      console.error('Error sending form data:', error);
    }
  };

  return (
    <div>
      <IconButton style={{ height: '24px', width: '70px', borderRadius: 3, backgroundColor: '#008BD9', marginLeft: '5px' }} onClick={handleClickOpen}>
          <AddIcon style={{fill:'white'}}/>
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Enter Presentation Deck Title</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            value={name}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit} variant="contained" color="primary">
            Submit
          </Button>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default NewDeckPopup;