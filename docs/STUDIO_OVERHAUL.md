# Puphr Studio product overhaul

This branch expands the existing Studio from a client website portfolio into a digital product studio. It preserves the Netlify production configuration, service pages, legacy homepage anchors, contact proxy and original client media.

## Local verification

```sh
pnpm install --frozen-lockfile
pnpm run check
pnpm run build:static
pnpm run test:static
```

The static build uses the existing Vite/React toolchain, then renders all known routes with React server rendering, writes unique metadata, sitemap and robots files, and verifies route links and local assets. No Astro dependencies or hosting migration are required for this initial overhaul. The browser hydrates the rendered markup. Netlify must serve generated route files before the 404 fallback. Preview deployments should verify contact form submission, mobile layout, all product destinations, image loading and hydration.

## Public portfolio

Edit `client/src/products.ts` for project information and availability; the directory, homepage and routes derive from this registry. Unpublished products have no store links. Update status and URLs only after release verification. CurveSet uses all eight actual screenshots from its companion site; InkPad Reset uses seven official Google Play screenshots; Usmos uses explicitly labeled companion-site artwork until captured app screenshots are available. AnyDrone uses its repository's cockpit screenshot, copied into Studio's public assets. SureTick, HairFuture and CrossScan Moto retain labeled previews until approved screenshots are available. Remote images are lazy-loaded, fit without cropping, and their specific origins are permitted by CSP. Product galleries link to the original available image.

## Before merging

- Confirm Android store listings and Usmos prelaunch status.
- Verify Netlify preview build and direct route navigation.
- Test existing contact flow (without sending unsolicited test mail).
- Review brand presentation at phone, tablet and desktop widths.
- Review product artwork, especially Labs; replace placeholders with approved screenshots and icons.
- If migrating to Cloudflare Workers later, implement and test the existing contact proxy and response security headers before changing DNS or hosting.

## Future integration

The independent product funnels should stay on their own domains. Add a discreet, relevant publisher link to Studio from each site after this branch ships. The main Puphr site can link to the new product directory. Use reviewed product manifest PRs for future updates, not automatic copying of private documentation. This branch does not modify other repositories or production hosting.
