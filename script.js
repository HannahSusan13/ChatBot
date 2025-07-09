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
  const newMsg = document.createElement("p");
  newMsg.innerHTML = `<strong>${sender}:</strong> ${message}`;
  chatBox.appendChild(newMsg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotReply(msg) {
  if (msg.includes("hi") || msg.includes("hello")) return "Hello there!";
  if (msg.includes("how are you")) return "I'm just code, but I'm good!";
  if (msg.includes("bye")) return "Bye! See you later.";
  if (msg.includes("name")) return "I'm your friendly chatbot!";
  return "Hmm, I didn't understand that.";
}
