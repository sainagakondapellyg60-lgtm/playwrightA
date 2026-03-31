/**
 * Timeout Constants for Test Execution
 * All timeouts in milliseconds (ms)
 */

export const TIMEOUTS = {
    CLIENT_SIDE_DELAY: 18000,      // 18 seconds - for client-side logic delays
    ELEMENT_VISIBLE: 20000,         // 20 seconds - for element visibility waits
    NETWORK_TIMEOUT: 30000,        // 30 seconds - for network requests
    PAGE_LOAD: 20000,              // 20 seconds - for page load
    ASSERTION_TIMEOUT: 16000,      // 16 seconds - for assertions
    ANIMATION: 2000,               // 2 seconds - for animations
    DEFAULT: 5000,                 // 5 seconds - default timeout
} as const;

// Type for timeout keys (for better type safety)
export type TimeoutKey = keyof typeof TIMEOUTS;

// Helper function to get timeout value
export function getTimeout(key: TimeoutKey): number {
    return TIMEOUTS[key];
}
