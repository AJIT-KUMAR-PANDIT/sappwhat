const express = require('express');
const session = require('express-session');
const { google } = require('googleapis');
const fs = require('fs');
const readline = require('readline');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(session({ secret: 'my-secret', resave: true, saveUninitialized: true }));

const SCOPES = ['https://www.googleapis.com/auth/drive.file'];
let oAuth2Client;

fs.readFile('credentials.json', (err, content) => {
    if (err) return console.log('Error loading client secret file:', err);
    const credentials = JSON.parse(content);
    const { client_secret, client_id, redirect_uris } = credentials.installed;
    oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);
});

app.get('/login', (req, res) => {
    const authUrl = oAuth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: SCOPES,
    });
    res.redirect(authUrl);
});

app.get('/oauth2callback', (req, res) => {
    const code = req.query.code;
    oAuth2Client.getToken(code, (err, token) => {
        if (err) return console.error('Error retrieving access token', err);
        oAuth2Client.setCredentials(token);
        req.session.token = token;
        res.redirect('/');
    });
});

app.get('/chats', async (req, res) => {
    if (!req.session.token) return res.status(401).send('Unauthorized');
    oAuth2Client.setCredentials(req.session.token);

    const drive = google.drive({ version: 'v3', auth: oAuth2Client });
    drive.files.list({
        pageSize: 10,
        fields: 'nextPageToken, files(id, name)',
    }, (err, response) => {
        if (err) return res.status(500).send('The API returned an error: ' + err);
        const files = response.data.files;
        res.json(files);
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
