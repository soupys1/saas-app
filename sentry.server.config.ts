// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

// Only initialize Sentry in production or when explicitly enabled
if (process.env.NODE_ENV === 'production' || process.env.NEXT_PUBLIC_ENABLE_SENTRY === 'true') {
  Sentry.init({
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN || "https://1f221f6029626571e9dd42b05ef9fba1@o4509430257156096.ingest.us.sentry.io/4509459964821504",

    // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
    tracesSampleRate: process.env.NODE_ENV === 'production' ? 0.1 : 1,

    // Setting this option to true will print useful information to the console while you're setting up Sentry.
    debug: process.env.NODE_ENV === 'development',

    // Disable Sentry in development by default
    enabled: process.env.NODE_ENV === 'production' || process.env.NEXT_PUBLIC_ENABLE_SENTRY === 'true',
  });
}
