// Funktion, um das Chatbot-Interface zu erstellen und den Button zu vergrößern
function showChatbotInterface() {
  const chatButton = document.getElementById("chat-button");
  const chatInterface = document.querySelector(".chatbot-popup");
  chatInterface.style.display = "block";
  chatButton.style.display = "none";
}

// Funktion, um das Chatbot-Interface zu schließen
function hideChatbotInterface() {
  const chatButton = document.getElementById("chat-button");
  const chatInterface = document.querySelector(".chat-interface");
  chatButton.style.display = "block"; // Button wieder anzeigen
  chatInterface.style.display = "none";
}

// Chat-Button klickbar machen
const chatButton = document.getElementById("chat-button");
chatButton.addEventListener("click", showChatbotInterface);

// Beispielanfrage an das Modell
query({
  inputs: {
    past_user_inputs: ["Wie alt wurde Johann"],
    generated_responses: ["It is Die Hard for sure."],
    text: "Can you explain why ?",
  },
}).then((response) => {
  console.log(JSON.stringify(response));
});

function displayBotMessage(message) {
  const chatMessages = document.querySelector(".chatbot-messages");
  const messageDiv = document.createElement("div");
  messageDiv.textContent = message;
  chatMessages.appendChild(messageDiv);
}

function sendMessage() {
  const userInput = document.getElementById("user-input").value;
  const chatMessages = document.querySelector(".chatbot-messages");

  // Anzeigen der Benutzereingabe im Chatfenster
  const userMessageDiv = document.createElement("div");
  userMessageDiv.textContent = `User: ${userInput}`;
  chatMessages.appendChild(userMessageDiv);
  // Erstellen eines FormData-Objekts und Hinzufügen der Benutzereingabe als Formulardaten
  const formData = new FormData();
  formData.append("user_message", userInput);

  // Senden der Benutzereingabe an den Bot-Server (Annahme: API-Endpunkt für den Bot)
  fetch("/ask", {
    method: "POST",
    body: formData, // Verwenden Sie das FormData-Objekt
  })
    .then((response) => response.json())
    .then((data) => {
      // Anzeigen der Bot-Antwort im Chatfenster
      const botMessageDiv = document.createElement("div");
      botMessageDiv.textContent = `Bot: ${data.response}`;
      chatMessages.appendChild(botMessageDiv);
    })
    .catch((error) => {
      console.error("Fehler beim Kommunizieren mit dem Bot:", error);
    });

  // Zurücksetzen der Benutzereingabe
  document.getElementById("user-input").value = "";
}

function toggleChatbotInterface() {
  const chatbotPopup = document.getElementById("chatbot-popup");
  chatbotPopup.style.display =
    chatbotPopup.style.display === "block" ? "none" : "block";
}
