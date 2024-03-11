import React from 'react';
import TextField from '@mui/material/TextField';

export default function Searchbar() {


    return (

        <div>
            <TextField
              id='search-field'
              label='Filter slide decks by name'
              variant='outlined'
              size='small'
              style={{
                width: '290px',
                height: '40px',
                marginLeft: '5px'
              }}
            />
        </div>

    );

}