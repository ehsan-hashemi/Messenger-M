document.addEventListener('DOMContentLoaded', () => {
    const registerButton = document.getElementById('registerButton');
    const themeToggle = document.getElementById('themeToggle');
    const sendButton = document.getElementById('sendButton');
    const messageInput = document.getElementById('messageInput');
    const messagesList = document.getElementById('messages');
    const loginSection = document.getElementById('login');
    const chatSection = document.getElementById('chat');
    const phoneNumberInput = document.getElementById('phoneNumber');
    const receiverPhoneNumberInput = document.getElementById('receiverPhoneNumber');
  
    let userPhoneNumber = null;
  
    // ثبت‌نام کاربر
    registerButton.addEventListener('click', () => {
      const phoneNumber = phoneNumberInput.value.trim();
      if (phoneNumber) {
        userPhoneNumber = phoneNumber;
        loginSection.style.display = 'none';
        chatSection.style.display = 'block';
        alert(`ثبت‌نام شما با شماره ${phoneNumber} انجام شد!`);
      }
    });
  
    // تغییر تم
    themeToggle.addEventListener('click', () => {
      document.body.dataset.theme = document.body.dataset.theme === 'dark' ? '' : 'dark';
    });
  
    // ارسال پیام
    sendButton.addEventListener('click', () => {
      const receiverPhoneNumber = receiverPhoneNumberInput.value.trim();
      const messageText = messageInput.value.trim();
      if (receiverPhoneNumber && messageText) {
        const message = {
          sender: userPhoneNumber,
          receiver: receiverPhoneNumber,
          content: messageText,
          timestamp: new Date(),
        };
  
        // ذخیره پیام در Local Storage
        const messages = JSON.parse(localStorage.getItem('messages')) || [];
        messages.push(message);
        localStorage.setItem('messages', JSON.stringify(messages));
  
        // نمایش پیام در رابط کاربری
        displayMessage(message);
        messageInput.value = '';
      }
    });
  
    // نمایش پیام‌ها در رابط کاربری
    function displayMessage(message) {
      const messageElement = document.createElement('li');
      messageElement.textContent = `از ${message.sender} به ${message.receiver}: ${message.content}`;
      messagesList.appendChild(messageElement);
    }
  
    // بارگذاری پیام‌ها از Local Storage
    function loadMessages() {
      const messages = JSON.parse(localStorage.getItem('messages')) || [];
      messages.forEach(displayMessage);
    }
  
    loadMessages();
  });
  