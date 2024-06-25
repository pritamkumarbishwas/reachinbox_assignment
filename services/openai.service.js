import OpenAI from 'openai';
import dotenv from 'dotenv';
dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const labelEmail = async (emailContent) => {
  const response = await openai.completions.create({
    model: 'text-davinci-003',
    prompt: `Label the email content: "${emailContent}" with one of the following labels: Interested, Not Interested, More information`,
    max_tokens: 10,
  });

  return response.data.choices[0].text?.trim();
};

const generateResponse = async (label, emailContent) => {
  let prompt = '';
  if (label === 'Interested') {
    prompt = `The email mentions interest. Generate a response asking if they are willing to hop on to a demo call by suggesting a time.`;
  } else if (label === 'Not Interested') {
    prompt = `The email mentions no interest. Generate a polite response acknowledging their decision.`;
  } else if (label === 'More information') {
    prompt = `The email asks for more information. Generate a response providing additional details.`;
  }

  const response = await openai.completions.create({
    model: 'text-davinci-003',
    prompt: `${prompt} Original email content: "${emailContent}"`,
    max_tokens: 150,
  });

  return response.data.choices[0].text?.trim();
};

export { labelEmail, generateResponse };
