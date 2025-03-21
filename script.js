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
  
    // ثبت شماره تلفن و ورود به بخش چت
    registerButton.addEventListener('click', () => {
      const phoneNumber = phoneNumberInput.value.trim();
      if (phoneNumber) {
        loginSection.style.display = 'none';
        chatSection.style.display = 'block';
        alert(`ثبت نام شما با شماره ${phoneNumber} انجام شد!`);
      }
    });
  
    // قابلیت تغییر تم
    themeToggle.addEventListener('click', () => {
      document.body.dataset.theme = document.body.dataset.theme === 'dark' ? '' : 'dark';
    });
  
    // ارسال پیام
    sendButton.addEventListener('click', () => {
      const receiverPhoneNumber = receiverPhoneNumberInput.value.trim();
      const messageText = messageInput.value.trim();
      if (receiverPhoneNumber && messageText) {
        const messageElement = document.createElement('li');
        messageElement.textContent = `به ${receiverPhoneNumber}: ${messageText}`;
        messagesList.appendChild(messageElement);
        messageInput.value = ''; // پاک کردن فیلد پیام
      }
    });
  });
  