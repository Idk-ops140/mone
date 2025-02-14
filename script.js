document.getElementById('send-btn').addEventListener('click', sendMessage);
document.getElementById('search-btn').addEventListener('click', searchUsers);

function sendMessage() {
    const chatInput = document.getElementById('chat-input');
    const chatWindow = document.getElementById('chat-window');
    const message = chatInput.value.trim();

    if (message) {
        const messageElement = document.createElement('div');
        messageElement.textContent = `You: ${message}`;
        chatWindow.appendChild(messageElement);
        chatInput.value = '';
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }
}

function searchUsers() {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    const query = searchInput.value.trim();

    if (query) {
        // Simulate a search request
        searchResults.innerHTML = `<p>Searching for: ${query}</p>`;
        // In a real application, you would make an AJAX request to your server here
    }
}
