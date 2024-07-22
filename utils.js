// Function to save data to local storage
function saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

// Function to load data from local storage
function loadData(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}

// Function to navigate to another page
function navigateTo(page) {
    window.location.href = page;
}
