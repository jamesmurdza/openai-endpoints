# OpenAI endpoints

This is an ExpressJS server with boilerplate code for OpenAI APIs.

**Usage:**

First, add your OPENAI_API_KEY to .env or your secrets manager.

Then, start the server:

```bash
yarn install
yarn start
```

You will then have access to a number of endpoints:

**Text generation endpoint:**

```bash
% curl "http://localhost:3000/api/generate-text?prompt=hello"
{"text":"Hi there! How can I assist you today?"}
```

**Image generation endpoint:**

```bash
% curl "http://localhost:3000/api/generate-image?prompt=hedgehog"
{"image":"https://oaidalleapiprodscus.blob.core.windows.net/private/..."}
```