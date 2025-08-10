import fs from 'fs'
import pino from 'pino'
import pinoHttp from 'pino-http'
import { dirname } from './utils.js'

// const prettyFileTransport = pino.transport({
//   target: 'pino/pino-pretty',
//   options: {
//     colorize: true,
//     translateTime: 'SYS:standard',
//     ignore: 'pid,hostname',
//   },
// })

const logDir = dirname(import.meta.url, '../logs')
const logFilePath = `${logDir}/app.log`

if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir, { recursive: true })
}

if (!fs.existsSync(logFilePath)) {
  fs.writeFileSync(logFilePath, '', {
    mode: 0o640,
  })
}

const logger = pino(
  {
    level: 'info',

    formatters: {
      level: label => {
        return { level: label.toUpperCase() }
      },
    },

    base: null, // remove pid and hostname from logs
    redact: {
      paths: ['email'], // obj, named obj, nested obj
      censor: '[PINO REDACTED]',
      // remove: true, // remove the field entirely
    },
    timestamp: pino.stdTimeFunctions.isoTime,
  },

  pino.transport({
    targets: [
      {
        target: 'pino-roll',
        options: {
          file: logFilePath,
          mkdir: true,
          size: '10m', // rotate when file size exceeds 10KB
          frequency: 'daily', // or rotate file daily
          dateFormat: 'yyyy-MM-dd',
        },
      },
    ],
  })
  // pino.destination(logFilePath)
)

// API requests get logged automagically when added to app.use
const httpLogger = pinoHttp({
  logger,
  serializers: {
    // err: (err) => err,
    req(req) {
      return {
        id: req.id,
        method: req.method,
        url: req.url,
        query: req.query,
        params: req.params,
        remoteAddress: req.remoteAddress,
        remotePort: req.remotePort,
      }
    },
    res(res) {
      return {
        statusCode: res.statusCode,
        statusMessage: res.statusMessage,
      }
    },
  },
})

export { httpLogger }
export default logger
