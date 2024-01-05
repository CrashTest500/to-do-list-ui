import React from 'react';

function AddItem({onAddItem}) {
    const [description, setDescription] = React.useState('');

    const addItem = () => {
        if (description?.trim() === '') {
            return;
        }

        callNewItem();

        setDescription('');
    };

    const callNewItem = async () => {
        
        await fetch("https://crashtest-to-do.azurewebsites.net/todo/add", {
            method: 'POST',
            body: JSON.stringify(description),
            headers: new Headers({'Content-Type': 'application/json'})
        })
        .then(response => response.json())
        .then(data => onAddItem(data));
    }

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