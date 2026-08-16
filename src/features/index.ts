/**
 * Features Layer
 * Reusable user interactions (used in 2+ places)
 *
 * Extract features only when the same user action/flow is confirmed
 * to be used across multiple pages with stable boundaries.
 */

// When you need to extract features:
// Example structure:
//   features/
//     auth/
//       ui/
//       api/
//       model/
//       index.ts
//     like-post/
//       ui/
//       api/
//       model/
//       index.ts
