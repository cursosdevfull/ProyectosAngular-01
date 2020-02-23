const express = require('express');
const bodyParser = require('body-parser');
const webpush = require('web-push');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const publicVapidKey =
  'BKRP_MqxioyqDt5fDL2-vKwBhxqNjC4UdVWAhEU0OhQHzYh2yfTaRyYnJftnNv6df7SslKng0n73Ycj8Dv_xeFk';
const privateVapidKey = 'jBJgPJ0YfMi4bw7syYb8I5N7YD76nJodLF9UWAcl_rY ';

webpush.setVapidDetails(
  'mailto: prueba@test.com',
  publicVapidKey,
  privateVapidKey
);

let suscripcion;

app.post('/suscribe', (req, res) => {
  suscripcion = req.body;

  res.status(201).json({ status: 'Suscripción correcta' });

  enviarMensaje('Suscripción correcta');
});

const enviarMensaje = msg => {
  const payload = JSON.stringify({
    notification: {
      title: 'Test Push Notification',
      body: msg
    }
  });

  webpush
    .sendNotification(suscripcion, payload)
    .catch(error => console.log(error));
};

app.listen(3000, () => console.log('Server is running on port 3000'));
