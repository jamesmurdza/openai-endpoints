import dotenv from 'dotenv';
import OpenAI from 'openai';
dotenv.config();

// This endpoint generates text from a prompt.
// See documentation: https://platform.openai.com/docs/api-reference/chat/create

// The following settings are used:
const MODEL = 'gpt-3.5-turbo';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function textEndpoint(req, res) {
  try {
    const { prompt } = req.query;
    const completion = await openai.chat.completions.create({
      model: MODEL,
      messages: [{ role: 'user', content: prompt }],
    });
    res.json({
      text: completion.choices[0].message.content
    });
  } catch (error) {
    // Handle errors:
    console.error(error.message);
    res.status(500).send(error.message);
  }
}