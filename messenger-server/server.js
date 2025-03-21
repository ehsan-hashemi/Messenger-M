const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

let users = []; // لیست کاربران
let messages = []; // لیست پیام‌ها

// ثبت نام کاربر
app.post('/register', (req, res) => {
  const { phoneNumber } = req.body;
  if (!users.includes(phoneNumber)) {
    users.push(phoneNumber);
    res.status(201).send('ثبت‌نام موفق بود');
  } else {
    res.status(400).send('کاربر قبلاً ثبت‌نام کرده است');
  }
});

// ارسال پیام
app.post('/sendMessage', (req, res) => {
  const { sender, receiver, content } = req.body;
  if (users.includes(sender) && users.includes(receiver)) {
    messages.push({ sender, receiver, content, timestamp: new Date() });
    res.status(201).send('پیام ارسال شد');
  } else {
    res.status(400).send('فرستنده یا گیرنده یافت نشد');
  }
});

// دریافت پیام‌ها
app.get('/messages/:phoneNumber', (req, res) => {
  const { phoneNumber } = req.params;
  const userMessages = messages.filter(
    msg => msg.receiver === phoneNumber || msg.sender === phoneNumber
  );
  res.status(200).json(userMessages);
});

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => console.log(`سرور در حال اجرا در پورت ${PORT}`));