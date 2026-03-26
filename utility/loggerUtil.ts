import * as winston from 'winston';

/**
 * Extract caller info (same as yours, slightly cleaned)
 */
const getCallerInfo = () => {
  const stack = new Error().stack;
  if (!stack) return 'unknown';

  const stackLines = stack.split('\n');

  for (const line of stackLines) {
    // Skip internal stuff
    if (
      line.includes('node_modules') ||
      line.includes('internal') ||
      line.includes('loggerUtil')
    ) {
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
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ level, message, timestamp, caller }) => {
      return `${timestamp} [${level.toUpperCase()}] [${caller}]: ${message}`;
    })
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'logs/test.log' })
  ]
});

/**
 * Wrapper logger (THIS is key)
 */
export const logger = {
  info: (msg: string) => baseLogger.info(msg, { caller: getCallerInfo() }),
  debug: (msg: string) => baseLogger.debug(msg, { caller: getCallerInfo() }),
  warn: (msg: string) => baseLogger.warn(msg, { caller: getCallerInfo() }),
  error: (msg: string) => baseLogger.error(msg, { caller: getCallerInfo() })
};