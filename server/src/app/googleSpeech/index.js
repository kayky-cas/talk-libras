const speech = require('@google-cloud/speech');
const fs = require('fs');
const { METHODS } = require('http');

const client = new speech.SpeechClient();


async function texto(name) {

    storageUri = fs.readFileSync(name).toString('base64');

    const audio = {
        content: storageUri,
    };

    const speechContext = {
        phrases: ['$TIME'],
    };

    const config = {
        encoding: 'OGG_OPUS',
        sampleRateHertz: 16000,
        languageCode: 'pt-BR',
        speechContexts: [speechContext],
    };

    const request = {
        config: config,
        audio: audio,
    };


    const [response] = await client.recognize(request);
    const transcription = response.results
        .map(result => result.alternatives[0].transcript)
        .join('\n');
    return JSON.stringify(transcription);
}

module.exports.texto = texto;

