import dotenv from 'dotenv';
import OpenAI from 'openai';
dotenv.config();

// This endpoint generates an image from a prompt.
// See documentation: https://platform.openai.com/docs/api-reference/images/create

// The following settings are used:
const MODEL = 'dall-e-2';
const SIZE = '256x256';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function imageEndpoint(req, res) {
  try {
    const { prompt } = req.query;
    const completion = await openai.images.generate({
      model: MODEL,
      prompt: prompt,
      n: 1,
      size: SIZE
    });
    res.json({
      image: completion.data[0].url
    });
  } catch (error) {
    // Handle errors:
    console.error(error.message);
    res.status(500).send(error.message);
  }
}