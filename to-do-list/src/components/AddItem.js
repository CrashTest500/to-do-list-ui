import React from 'react';

function AddItem({onAddItem}) {
    const [description, setDescription] = React.useState('');

    const addItem = () => {
        if (description?.trim() === '') {
            return;
        }

        onAddItem(description);
                
        setDescription('');
    };

    return (
        <div>
            <form>
                <input type="text"
                    value={description}
                    onChange={e => setDescription(e.target.value)} />

                <button type="button" 
                    onClick={addItem}>
                    Add Item
                </button>
            </form>
        </div>
    )
}

export default AddItem;