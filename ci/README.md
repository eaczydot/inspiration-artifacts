# Cross-platform gate

`github-actions-cross-platform.yml` is ready to install at `.github/workflows/ci.yml`. The current GitHub OAuth token lacks `workflow`, so the push cannot place it there. Until that scope is granted, run the same required gate locally before each push:

1. `npm ci`
2. `npm run build-storybook`
3. `npx next build`
4. Start the app on port 3100
5. `npm run qa:platform`

The QA script opens representative marketing/product routes at 1440x900 and 390x844, rejects Next error pages and uncontrolled horizontal overflow, and saves screenshots as CI artifacts.
