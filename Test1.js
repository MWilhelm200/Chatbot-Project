// Funktion, um das Chatbot-Interface zu erstellen und den Button zu vergrößern
function showChatbotInterface() {
    const chatButton = document.getElementById('chat-button');
    const chatInterface = document.createElement('div');
    chatInterface.className = 'chat-interface';

    // Chatfenster erstellen
    const chatWindow = document.createElement('div');
    chatWindow.className = 'chat-window';
    chatInterface.appendChild(chatWindow);

    // Texteingabe erstellen
    const inputBox = document.createElement('input');
    inputBox.type = 'text';
    inputBox.placeholder = 'Nachricht eingeben...';
    inputBox.className = 'chat-input';
    chatInterface.appendChild(inputBox);

    // Button zum Schließen hinzufügen
    const closeButton = document.createElement('button');
    closeButton.textContent = 'Schließen';
    closeButton.className = 'close-button';
    closeButton.addEventListener('click', hideChatbotInterface);
    chatInterface.appendChild(closeButton);

    chatButton.style.display = 'none'; // Button ausblenden
    document.body.appendChild(chatInterface);
}

// Funktion, um das Chatbot-Interface zu schließen
function hideChatbotInterface() {
    const chatButton = document.getElementById('chat-button');
    const chatInterface = document.querySelector('.chat-interface');
    chatButton.style.display = 'block'; // Button wieder anzeigen
    chatInterface.style.display = 'none';
}



// Chat-Button klickbar machen
const chatButton = document.getElementById('chat-button');
chatButton.addEventListener('click', showChatbotInterface);

// Beispielanfrage an das Modell
query({
    "inputs": {
        "past_user_inputs": ["Which movie is the best ?"],
        "generated_responses": ["It is Die Hard for sure."],
        "text": "Can you explain why ?"
    }
}).then((response) => {
    console.log(JSON.stringify(response));
});
function displayBotMessage(message) {
    const chatMessages = document.querySelector('.chatbot-messages');
    const messageDiv = document.createElement('div');
    messageDiv.textContent = message;
    chatMessages.appendChild(messageDiv);
}
function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    // Hier sollten Sie die Anfrage an den Bot senden und die Antwort erhalten.
    // Die Antwort kann dann mit displayBotMessage() im Chatfenster angezeigt werden.
    // Beispiel:
    // displayBotMessage(`User: ${userInput}`);
    // displayBotMessage(`Bot: ${botResponse}`);
}
function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    const chatMessages = document.querySelector('.chatbot-messages');
    
    // Anzeigen der Benutzereingabe im Chatfenster
    const userMessageDiv = document.createElement('div');
    userMessageDiv.textContent = `User: ${userInput}`;
    chatMessages.appendChild(userMessageDiv);

    // Senden der Benutzereingabe an den Bot-Server (Annahme: API-Endpunkt für den Bot)
    fetch('/bot-api', {
        method: 'POST',
        body: JSON.stringify({ input: userInput }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        // Anzeigen der Bot-Antwort im Chatfenster
        const botMessageDiv = document.createElement('div');
        botMessageDiv.textContent = `Bot: ${data.response}`;
        chatMessages.appendChild(botMessageDiv);
    })
    .catch(error => {
        console.error('Fehler beim Kommunizieren mit dem Bot:', error);
    });

    // Zurücksetzen der Benutzereingabe
    document.getElementById('user-input').value = '';
}
function toggleChatbotInterface() {
    const chatbotPopup = document.getElementById('chatbot-popup');
    chatbotPopup.style.display = chatbotPopup.style.display === 'block' ? 'none' : 'block';
}
// Funktion, um das Chatbot-Interface zu erstellen und den Button zu vergrößern
function showChatbotInterface() {
    const chatButton = document.getElementById('chat-button');
    const chatInterface = document.querySelector('.chatbot-popup');
    chatInterface.style.display = 'block';
    chatButton.style.display = 'none';
}
// ... (Ihre vorhandenen Funktionen)

// Aktualisierte Funktion, um das Chatbot-Interface zu öffnen
function toggleChatbotInterface() {
    const chatbotPopup = document.getElementById('chatbot-popup');
    chatbotPopup.style.display = 'block';
    // Beachten Sie, dass der Chat-Button nicht versteckt wird, wenn Sie über das Bild klicken.
}

