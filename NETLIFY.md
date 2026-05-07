# Netlify Deployment

This branch is configured for a static Netlify deploy.

## Build Settings

- Build command: `pnpm run build:netlify`
- Publish directory: `dist/public`
- Node version: `20`
- pnpm version: `9.0.0`

Netlify reads these settings from `netlify.toml`.

## Contact Form

The app posts contact form submissions to `/api/contact`. On Netlify, that path is proxied to:

```text
https://puphr.com/api/contact
```

This keeps the deployed subdomain static while preserving the existing Puphr contact flow.

## Subdomain Setup

After the Netlify site is created, add your custom subdomain in Netlify under:

```text
Site configuration -> Domain management -> Add a domain alias
```

Then create the DNS record requested by Netlify, usually a `CNAME` from the subdomain to the Netlify site hostname.
