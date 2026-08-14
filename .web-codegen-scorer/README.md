# Web Codegen Scorer

This directory contains the evaluation environment for the portfolio application.

## Commands

- `npm run scorer:eval` — generate and evaluate the configured prompt.
- `npm run scorer:eval:local` — evaluate the last cached generation again.
- `npm run scorer:report` — open the report viewer.

The scorer reads the provider API key from the environment, following the official setup:

- `GEMINI_API_KEY` for Gemini;
- `OPENAI_API_KEY` for OpenAI;
- `ANTHROPIC_API_KEY` for Anthropic;
- `XAI_API_KEY` for xAI.

API keys must not be stored in this repository.
