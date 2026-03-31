import * as winston from 'winston';

export type TestLogger = {
  info: (message: string) => void;
  debug: (message: string) => void;
  warn: (message: string) => void;
  error: (message: string) => void;
};

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

const writeLog = (level: keyof TestLogger, message: string) => {
  baseLogger.log(level, message, { caller: getCallerInfo() });
};

const formatMessage = (testTitle: string | undefined, message: string) => {
  return testTitle ? `[${testTitle}] ${message}` : message;
};

export const createTestLogger = (testTitle?: string): TestLogger => ({
  info: (message: string) => writeLog('info', formatMessage(testTitle, message)),
  debug: (message: string) => writeLog('debug', formatMessage(testTitle, message)),
  warn: (message: string) => writeLog('warn', formatMessage(testTitle, message)),
  error: (message: string) => writeLog('error', formatMessage(testTitle, message))
});

export const logger = createTestLogger();
