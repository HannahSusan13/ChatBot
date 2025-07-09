function sendMessage() {
  const userInput = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");
  const message = userInput.value.trim();

  if (message === "") return;

  appendMessage("You", message);
  const reply = getBotReply(message.toLowerCase());
  setTimeout(() => appendMessage("Bot", reply), 500);

  userInput.value = "";
}

function appendMessage(sender, message) {
  const chatBox = document.getElementById("chat-box");
  const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const newMsg = document.createElement("p");
  newMsg.innerHTML = `<strong>${sender} [${time}]:</strong> ${message}`;
  chatBox.appendChild(newMsg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function clearChat() {
  document.getElementById("chat-box").innerHTML = "";
}

function checkEnter(event) {
  if (event.key === "Enter") {
    sendMessage();
  }
}

function getBotReply(msg) {
  if (msg.includes("hi") || msg.includes("hello")) return "Hey there! 😊";
  if (msg.includes("how are you")) return "I'm just a chatbot, but I feel electric ⚡";
  if (msg.includes("bye")) return "Goodbye! Come back soon 💬";
  if (msg.includes("your name")) return "I'm HannahBot, nice to meet you!";
  if (msg.includes("joke")) return "Why don't robots ever panic? They always keep their circuits together!";
  if (msg.includes("thanks")) return "You're always welcome! 💖";
  return "Hmm... I'm still learning. Can you try something else?";
}
