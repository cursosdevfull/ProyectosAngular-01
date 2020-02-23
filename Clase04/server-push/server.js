const express = require('express');
const bodyParser = require('body-parser');
const webpush = require('web-push');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const publicVapidKey =
  'BJdT_vdKMt3jldMnX2E34U10cwdKGPZlgiRcrC6Bnade5cUin2iMe4d5bzDXQedoUvIRARhvhhUNOiVpZ4eGFGk';
const privateVapidKey = 'aeqEHgKuxsgLWF5SD9jZaCPVHaQnX9Rp_OimhUcXrKY';

webpush.setVapidDetails(
  'mailto: prueba@test.com',
  publicVapidKey,
  privateVapidKey
);

let suscripcion;

app.post('/suscribe', (req, res) => {
  suscripcion = req.body;
  console.log(suscripcion);

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
