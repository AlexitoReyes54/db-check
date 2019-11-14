const accountSid = 'AC4234120e92e3867a93bc8f6023e34ad9';
const authToken = 'dfb00522ddb45141768cdc6898e5e38c';
const client = require('twilio')(accountSid, authToken);
const Sequelize = require('sequelize');
var time = 3000000;
function check() {

const sequelize = new Sequelize('DUC','postgres', 'supersecret',  {
  host: '35.202.244.65',
  dialect: 'postgres',
  pool:{
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

sequelize.authenticate()
  .then(() => {
    console.log("db funionado");
    send("todo ok")
  })
  .catch(err => {
    aux = false;
    console.log("servicio db no disponible");
    send("el servicio db no esta disponible")
  });
}

function send(msg) {
  client.messages
        .create({
           from: 'whatsapp:+14155238886',
           body: msg,
           to: 'whatsapp:+18496573947'
         })
        .then(message => console.log(message));
  }

setInterval(function() {
 check()
},time)
