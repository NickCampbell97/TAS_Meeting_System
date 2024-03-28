import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';


const InsertSelection = ({ value, onChange, options }) => {
  
    return (
      <Select
        value={value}
        onChange={onChange}
        style={{ color: 'black', backgroundColor: 'white', minWidth: '100px', textAlign: 'center', fontSize: '15px' }}
      >
        {options.map((option, index) => (
          <MenuItem key={index} value={option.value}>{option.label}</MenuItem>
        ))}
      </Select>
    );
  };
  
  export default InsertSelection;