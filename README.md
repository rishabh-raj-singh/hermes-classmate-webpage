# hermes-classmate-website

## Deploying to Cloudflare Workers

This repository keeps the React app in `frontend/`, so Cloudflare should build from the repository root and deploy the generated `frontend/build` directory.

Use these settings in Workers Builds:

- Build command: `npm run build`
- Deploy command: `npm run deploy`

If you are deploying manually, run:

```bash
npm install
npm run deploy
```
