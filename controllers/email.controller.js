import { fetchGmailEmails, fetchOutlookEmails } from '../services/email.service.js';
import { labelEmail, generateResponse } from '../services/openai.service.js';
import { sendEmailResponse } from '../utils/email.js';

const handleIncomingEmails = async (req, res) => {
  try {
    const gmailEmails = await fetchGmailEmails();
    const outlookEmails = await fetchOutlookEmails();
    const allEmails = [...gmailEmails, ...outlookEmails];

    for (const email of allEmails) {
      const emailContent = email.snippet || email.bodyPreview;
      const label = await labelEmail(emailContent);
      const response = await generateResponse(label, emailContent);
      await sendEmailResponse(email.from.emailAddress.address, 'Re: ' + email.subject, response);
    }

    res.send('Emails processed successfully');
  } catch (error) {
    res.status(500).send('Error processing emails');
  }
};

export { handleIncomingEmails };
