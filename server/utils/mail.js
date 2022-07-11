const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport(
  {
    // настройки почтового сервера SMTP, надо гуглить настройки почтовых сервисов
    // ethereal.email для тестирования, потом заменяем на рельный почтовый сервер
    host: 'smtp.mail.ru', // адрес smtp сервера для отправки email
    port: 465, // порт - почтового сервера через который будет отправлятся email
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'graffiti_place@mail.ru', // логин почтового аккаунта
      pass: 'pM7dTtuvxXsVU9gNIPn8', // P4mRry2t_aRU пароль почтового аккаунта
    },
  },
  // передаем вторым параметром объект содержащий поля,
  // в котором каждое сообщение используется по умолчанию
  {
    from: ' "Graffiti Place" <graffiti_place@mail.ru>', //  from это адрес почтового адреса с которого будем отправлять клиенту сообщение
  },
);

const mailer = (message) => {
  transporter.sendMail(message, (err, info) => {
    if (err) return console.log(err);
    console.log('Email sent: ', info);
  });
};

module.exports = mailer;
