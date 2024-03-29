import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const SlideOptionButton = ({ onItemClick }) => {

    const [anchorEl, setAnchorEl] = useState(null);
    const menuItems=[
        { label: 'Edit', action: 'action1' },
        { label: 'Duplicate', action: 'action2' },
        { label: 'Delete', action: 'action3' }
    ];

    const onClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleMenuItemClick = (action) => {
        onItemClick(action);
        handleClose();
    };

    return (
        <div>
            <IconButton 
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={onClick}
                style={{ minHeight: '20px', minWidth: '20px', position: 'absolute', top: '1px', right: '3px', padding: '3px' }} 
            >
                <MoreHorizIcon fontSize='medium' />
            </IconButton>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {menuItems.map((menuItem, index) => (
                    <MenuItem key={index} onClick={() => handleMenuItemClick(menuItem.action)}>
                        {menuItem.label}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
};

export default SlideOptionButton;