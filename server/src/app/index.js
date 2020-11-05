const express = require('express');
const cors = require('cors');
const multipart = require('connect-multiparty');

const app = express();

var port = process.env.PORT || 8888;

const audi = require('./googleSpeech/index')

app.use(express.urlencoded({ extended: true}));

app.use(express.json());

const corsOptions = {
  origin: '*',
  optionSuccessStatus: 200
};

app.use(cors(corsOptions));

const multipartMiddleware = multipart({ uploadDir: 'src/assets/audios' });

app.post('/audio', multipartMiddleware, function (req, res) {
    console.log(req.files.audio.path)
    audi.texto(req.files.audio.path).then((result) => {
      console.log(result);
      res.send(result);
    })

});

app.listen(port, () => {
    console.log(`Rodando em http://localhost:${port}`)
});
