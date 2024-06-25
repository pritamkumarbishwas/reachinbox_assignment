import { oAuth2Client } from '../services/auth.service.js';

const googleAuth = (req, res) => {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: ['https://www.googleapis.com/auth/gmail.readonly'],
  });
  res.redirect(authUrl);
};



const googleAuthCallback = async (req, res) => {
  const { code } = req.query;

  try {
    const { tokens } = await oAuth2Client.getToken(code);
    oAuth2Client.setCredentials(tokens);

    res.send('Google OAuth Successful');
  } catch (error) {
    console.error('Error exchanging code for tokens:', error);

    if (error.response && error.response.data) {
      console.error('Google API Error:', error.response.data.error_description);
    }

    res.status(500).send('Error exchanging code for tokens');
  }
};

export { googleAuth, googleAuthCallback };
