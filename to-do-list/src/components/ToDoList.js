import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';

function ToDoList({toDoItems, onUpdateItem}) {

    const handleToggle = (item) => {
        item.isComplete = !item.isComplete;

        onUpdateItem(item);
    }

    return (
        <div className="to-do-list">
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            {toDoItems.map((value) => {
                const labelId = `checkbox-list-label-${value.key}`;
        
                return (
                <ListItem
                    key={value.key}
                    disablePadding
                >
                    <ListItemButton role={undefined} onClick={() => handleToggle(value)} dense>
                    <ListItemIcon>
                        <Checkbox
                        edge="start"
                        checked={value.isComplete}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': labelId }}
                        />
                    </ListItemIcon>
                    <ListItemText 
                        id={labelId} 
                        primary={value.description}
                        className={(value.isComplete ? 'strikethrough' : '')} />
                    </ListItemButton>
                </ListItem>
                );
            })}
            </List>
        </div>
      );
    }

export default ToDoList;