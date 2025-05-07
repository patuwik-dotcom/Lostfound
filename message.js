const sendBtn = document.getElementById('sendb');
    const inputField = document.getElementById('type');
    const messagesDiv = document.getElementById('messages');

    function sendMessage() {
      const text = inputField.value.trim();
      if (text === '') return;

      const msg = document.createElement('div');
      msg.classList.add('message', 'user');
      msg.textContent = text;

      messagesDiv.appendChild(msg);
      inputField.value = '';
      messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }

    sendBtn.addEventListener('click', sendMessage);
    inputField.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') sendMessage();
    });