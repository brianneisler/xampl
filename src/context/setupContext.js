import pino from 'pino'

/**
 * Sets up the Context object for use by the CLI
 * @function
 * @since v0.1.0
 * @category context
 * @returns {Context}
 * @example
 *
 * const context = setupContext()
 */
const setupContext = ({ logger } = {}) => {
  return {
    logger: logger || pino({ prettyPrint: { colorize: true } })
  }
}

export default setupContext
