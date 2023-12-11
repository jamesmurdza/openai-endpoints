import express from 'express';
import cors from 'cors';

import textEndpoint from './routes/text.js';
import imageEndpoint from './routes/image.js';

const app = express();
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Welcome to this API!');
});

// Text generation endpoint
// /api/generate-text?message=birthday+party+ideas
app.get('/api/generate-text', textEndpoint);

// Image generation endpoint
// /api/generate-image?prompt=happy+dancing+cat
app.get('/api/generate-image', imageEndpoint);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});