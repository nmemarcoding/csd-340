// Initialize array to store items
let todoItems = [];
let isDisplaying = false;

// Get DOM elements
const itemInput = document.getElementById('itemInput');
const addButton = document.getElementById('addButton');
const deleteButton = document.getElementById('deleteButton');
const displayButton = document.getElementById('displayButton');
const displayArea = document.getElementById('displayArea');

// Add item function
addButton.addEventListener('click', () => {
    const newItem = itemInput.value.trim();
    if (newItem) {
        todoItems.push(newItem);
        itemInput.value = '';
        if (isDisplaying) {
            displayItems();
        }
    }
});

// Delete last entry function
deleteButton.addEventListener('click', () => {
    if (todoItems.length > 0) {
        todoItems.pop();
        if (isDisplaying) {
            displayItems();
        }
    }
});

// Display items function
displayButton.addEventListener('click', () => {
    isDisplaying = !isDisplaying;
    if (isDisplaying) {
        displayItems();
    } else {
        displayArea.innerHTML = '';
    }
});

// Function to display items
function displayItems() {
    if (todoItems.length === 0) {
        displayArea.innerHTML = '<p>No items in the list</p>';
    } else {
        const itemsList = todoItems.map((item, index) => `
            <div class="todo-item">
                <p>${index + 1}. ${item}</p>
                <span class="delete-icon" data-index="${index}">❌</span>
            </div>
        `).join('');
        displayArea.innerHTML = itemsList;
        
        // Add click handlers for delete icons
        document.querySelectorAll('.delete-icon').forEach(icon => {
            icon.addEventListener('click', (e) => {
                const index = parseInt(e.target.dataset.index);
                todoItems.splice(index, 1);
                if (isDisplaying) {
                    displayItems();
                }
            });
        });
    }
}
