import { google } from 'googleapis';
import { oAuth2Client, outlookClient } from './auth.service.js';

const fetchGmailEmails = async () => {
  try {
    const gmail = google.gmail({ version: 'v1', auth: oAuth2Client });
    const res = await gmail.users.messages.list({
      userId: 'me',
      q: 'is:unread',
    });
    const emails = res.data.messages || [];
    return emails;
  } catch (error) {
    console.error('Error fetching Gmail emails:', error);
    return [];
  }
};

const fetchOutlookEmails = async () => {
  try {
    const res = await outlookClient.api('/me/mailFolders/inbox/messages').filter("isRead eq false").get();
    const emails = res.value || [];
    return emails;
  } catch (error) {
    console.error('Error fetching Outlook emails:', error);
    return [];
  }
};


export { fetchGmailEmails, fetchOutlookEmails };
