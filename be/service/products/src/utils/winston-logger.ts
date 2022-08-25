import { createLogger, transports, format } from 'winston';
import dayjs from 'dayjs';

const defaultLevel = process.env.LOG_LEVEL || 'info';

const options = {
  exitOnError: false,
  level: defaultLevel
};

const logger = createLogger(options);

if (process.env.NODE_ENV === 'development') {
  logger.add(new transports.Console({
    format: format.combine(
      format.timestamp(),
      format.colorize(),
      format.printf((info: any): string => {
        return `[${dayjs(info.timestamp).format('YYYY-MM-DD HH:mm:ssSSS')}] -> ${info.level}: ${info.message}`;
      }))
  }));
}

export default logger;
