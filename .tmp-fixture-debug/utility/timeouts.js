"use strict";
/**
 * Timeout Constants for Test Execution
 * All timeouts in milliseconds (ms)
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TIMEOUTS = void 0;
exports.getTimeout = getTimeout;
exports.TIMEOUTS = {
    CLIENT_SIDE_DELAY: 18000, // 18 seconds - for client-side logic delays
    ELEMENT_VISIBLE: 20000, // 20 seconds - for element visibility waits
    NETWORK_TIMEOUT: 30000, // 30 seconds - for network requests
    PAGE_LOAD: 20000, // 20 seconds - for page load
    ASSERTION_TIMEOUT: 16000, // 16 seconds - for assertions
    ANIMATION: 2000, // 2 seconds - for animations
    DEFAULT: 5000, // 5 seconds - default timeout
};
// Helper function to get timeout value
function getTimeout(key) {
    return exports.TIMEOUTS[key];
}
