// // Import with `import * as Sentry from "@sentry/node"` if you are using ESM
// import * as Sentry from "@sentry/node";
// import { nodeProfilingIntegration } from "@sentry/profiling-node";

// Sentry.init({
//   dsn: "https://26ab9bc6306ec5b62b0020d9f3b951a5@o4509008027516928.ingest.us.sentry.io/4509008031449088",
//   integrations: [nodeProfilingIntegration(), Sentry.mongooseIntegration()],
//   // Tracing
//   tracesSampleRate: 1.0, //  Capture 100% of the transactions
// });
// // Manually call startProfiler and stopProfiler
// // to profile the code in between
// Sentry.profiler.startProfiler();

// // Starts a transaction that will also be profiled
// Sentry.startSpan(
//   {
//     name: "My First Transaction",
//   },
//   () => {
//     // the code executing inside the transaction will be wrapped in a span and profiled
//   }
// );

// // Calls to stopProfiling are optional - if you don't stop the profiler, it will keep profiling
// // your application until the process exits or stopProfiling is called.
// Sentry.profiler.stopProfiler();

// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
import * as Sentry from "@sentry/node";

Sentry.init({
  dsn: "https://26ab9bc6306ec5b62b0020d9f3b951a5@o4509008027516928.ingest.us.sentry.io/4509008031449088",
  integrations: [Sentry.mongooseIntegration()],
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
});
