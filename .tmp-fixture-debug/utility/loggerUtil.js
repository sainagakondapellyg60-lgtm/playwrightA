"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = exports.createTestLogger = void 0;
const winston = __importStar(require("winston"));
/**
 * Extract caller info (same as yours, slightly cleaned)
 */
const getCallerInfo = () => {
    const stack = new Error().stack;
    if (!stack)
        return 'unknown';
    const stackLines = stack.split('\n');
    for (const line of stackLines) {
        // Skip internal stuff
        if (line.includes('node_modules') ||
            line.includes('internal') ||
            line.includes('loggerUtil')) {
            continue;
        }
        // Case 1: with parentheses
        let match = line.match(/\((.*):(\d+):(\d+)\)/);
        // Case 2: without parentheses (YOUR CASE)
        if (!match) {
            match = line.match(/at (.*):(\d+):(\d+)/);
        }
        if (match) {
            const fullPath = match[1];
            const lineNumber = match[2];
            const fileName = fullPath.split(/[\\/]/).pop();
            return `${fileName}:${lineNumber}`;
        }
    }
    return 'unknown';
};
/**
 * Base winston logger (no caller logic here)
 */
const baseLogger = winston.createLogger({
    level: process.env.LOG_LEVEL || 'debug',
    format: winston.format.combine(winston.format.timestamp(), winston.format.printf(({ level, message, timestamp, caller }) => {
        return `${timestamp} [${level.toUpperCase()}] [${caller}]: ${message}`;
    })),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'logs/test.log' })
    ]
});
const writeLog = (level, message) => {
    baseLogger.log(level, message, { caller: getCallerInfo() });
};
const formatMessage = (testTitle, message) => {
    return testTitle ? `[${testTitle}] ${message}` : message;
};
const createTestLogger = (testTitle) => ({
    info: (message) => writeLog('info', formatMessage(testTitle, message)),
    debug: (message) => writeLog('debug', formatMessage(testTitle, message)),
    warn: (message) => writeLog('warn', formatMessage(testTitle, message)),
    error: (message) => writeLog('error', formatMessage(testTitle, message))
});
exports.createTestLogger = createTestLogger;
exports.logger = (0, exports.createTestLogger)();
