import * as sentry from "@sentry/remix"

const LEVELS = {
  DEBUG: "debug",
  INFO: "info",
  WARN: "warn",
  ERROR: "error",
}

const sentrySeverityMap = {
  [LEVELS.DEBUG]: LEVELS.DEBUG,
  [LEVELS.INFO]: LEVELS.INFO,
  [LEVELS.WARN]: "warning",
  [LEVELS.ERROR]: LEVELS.ERROR,
}

const isLevel = (() => {
  const levelValues = new Set(Object.values(LEVELS))
  return level => levelValues.has(level)
})()

const init = (Sentry, consoleLogger, environment = process.env.NODE_ENV || "production") => {
  const sentryWrapper = (
    level,
    { tags, extras, devConsole = environment !== "production" },
    ...message
  ) => {
    if (isLevel(level) && devConsole) {
      const metadata = {}
      if (tags) {
				metadata.tags = tags
			}

      if (extras) {
				metadata.extras = extras
			}

      Object.keys(metadata).length
        ? consoleLogger[LEVELS[level.toUpperCase()]](...message, { metadata })
        : consoleLogger[LEVELS[level.toUpperCase()]](...message)
    }

    Sentry.withScope(scope => {
      if (tags) scope.setTags(tags)
      if (extras) scope.setExtras(extras)
      if (isLevel(level)) scope.setLevel(sentrySeverityMap[level])
      level === LEVELS.ERROR
        ? Sentry.captureException(message[0])
        : Sentry.captureMessage(message.join(", "))
    })
  }

  return {
    withScope: ({ tags, extras, devConsole }) =>
      Object.values(LEVELS).reduce((accum, level) => {
        accum[level] = (...message) =>
          sentryWrapper(level, { tags, extras, devConsole }, ...message)
        return accum
      }, {}),
    ...Object.values(LEVELS).reduce((accum, level) => {
      accum[level] = (...message) => sentryWrapper(level, {}, ...message)
      return accum
    }, {}),
  }
}

export const logger = init(sentry, console)
