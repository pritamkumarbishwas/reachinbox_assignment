import { google } from 'googleapis';
import { Client } from '@microsoft/microsoft-graph-client';
import 'isomorphic-fetch';
import dotenv from 'dotenv';

dotenv.config();

const oAuth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_REDIRECT_URI
);

const microsoftAuthProvider = (done) => {
    done(null, process.env.OUTLOOK_ACCESS_TOKEN);
};

const outlookClient = Client.init({ authProvider: microsoftAuthProvider });

export { oAuth2Client, outlookClient };
